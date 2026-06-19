import { useCallback, useEffect, useState, useRef } from "react";
import { AlertTriangle, MousePointerClick, Keyboard, Activity } from "lucide-react";
import type { Note } from "../types";
import { 
  ReactFlow, 
  Background, 
  Controls, 
  applyNodeChanges, 
  applyEdgeChanges, 
  addEdge, 
  type Node, 
  type Edge, 
  type NodeChange, 
  type EdgeChange, 
  type Connection 
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ShapeNode from "./ShapeNode";

const nodeTypes = {
  shape: ShapeNode,
};

interface Props {
  note: Note;
  updateNote: (note: Note) => void;
  insertSignal: { type: string, payload: any } | null;
}

export default function Editor({ note, updateNote, insertSignal }: Props) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [title, setTitle] = useState(note.title);

  // Analytics State
  const [keystrokes, setKeystrokes] = useState<number[]>([]);
  const [mouseMoves, setMouseMoves] = useState(0);
  const [pasteCount, setPasteCount] = useState(0);
  const [toast, setToast] = useState<{ visible: boolean, message: string }>({ visible: false, message: "" });
  const toastTimeoutRef = useRef<any>(null);

  useEffect(() => {
    setTitle(note.title);
    try {
      if (note.content) {
        const parsed = JSON.parse(note.content);
        setNodes(parsed.nodes || []);
        setEdges(parsed.edges || []);
        
        // Restore analytics if present, or reset if it's a new load
        if (parsed.analytics) {
          setKeystrokes(parsed.analytics.keystrokes || []);
          setMouseMoves(parsed.analytics.mouseMoves || 0);
          setPasteCount(parsed.analytics.pasteCount || 0);
        } else {
          setKeystrokes([]);
          setMouseMoves(0);
          setPasteCount(0);
        }
      } else {
        setNodes([]);
        setEdges([]);
        setKeystrokes([]);
        setMouseMoves(0);
        setPasteCount(0);
      }
    } catch (e) {
      setNodes([]);
      setEdges([]);
    }
  }, [note.id]);

  // Save current analytics structure
  const getAnalytics = useCallback(() => {
    return { keystrokes, mouseMoves, pasteCount };
  }, [keystrokes, mouseMoves, pasteCount]);

  // Global Listeners for Telemetry
  useEffect(() => {
    const handleMouse = () => setMouseMoves((prev) => prev + 1);
    
    // Keystroke logic - only log character keys
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.length === 1 || e.key === "Backspace" || e.key === "Enter") {
        setKeystrokes((prev) => [...prev, Date.now()]);
      }
    };

    const handlePaste = () => {
      setPasteCount((prev) => prev + 1);
      
      // Beautiful non-blocking Toast
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      setToast({ visible: true, message: "Paste detected! (Possible AI)" });
      toastTimeoutRef.current = setTimeout(() => {
        setToast({ visible: false, message: "" });
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("paste", handlePaste);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!insertSignal) return;
    
    const newNode: Node = {
      id: `${insertSignal.type}-${Date.now()}`,
      position: { x: window.innerWidth / 3, y: window.innerHeight / 3 },
      data: {
        shape: insertSignal.type === "shape" ? insertSignal.payload : (insertSignal.type === "text" ? "text" : "square"),
        label: insertSignal.type === "text" ? "Text Block" : "",
        image: insertSignal.type === "image" ? insertSignal.payload : null,
        color: insertSignal.type === "image" ? "bg-transparent" : "bg-neutral-800",
      },
      type: "shape",
      style: { width: 150, height: 150 },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [insertSignal]);

  // Unified Autosave: syncs changes gracefully
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Only stringify if there are actual nodes or we've done an edit
      if (nodes.length > 0 || edges.length > 0 || title !== "Untitled Document") {
        updateNote({ 
          ...note, 
          title,
          content: JSON.stringify({ nodes, edges, analytics: getAnalytics() }) 
        });
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [nodes, edges, title]); // Removed getAnalytics from deps so mouseMove doesn't spam saves.

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge({ ...connection, animated: true, type: 'smoothstep' }, eds));
  }, []);

  const typingSpeed = () => {
    if (keystrokes.length < 2) return 0;
    
    // Instead of raw text length, we calculate chars/sec directly from the keystroke timestamps
    // or calculate total length by extracting text from nodes.
    const diffSeconds = (keystrokes[keystrokes.length - 1] - keystrokes[0]) / 1000;
    if (diffSeconds === 0) return 0;
    
    const charsTotal = title.length + nodes.reduce((acc, curr) => acc + (curr.data.label ? String(curr.data.label).length : 0), 0);
    return (charsTotal / Math.max(diffSeconds, 1)).toFixed(2);
  };

  return (
    <div className="flex-1 h-full w-full bg-neutral-950 relative overflow-hidden">
      
      {/* Title Bar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 pointer-events-none">
        <input
          value={title}
          onChange={handleTitleChange}
          placeholder="Document Title..."
          className="text-4xl font-bold bg-transparent text-white border-none outline-none placeholder:text-neutral-700 pointer-events-auto shadow-sm drop-shadow-md"
        />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="w-full h-full"
      >
        <Background color="#ffffff" gap={16} size={1} variant={"dots" as any} className="opacity-5" />
        <Controls 
          className="bg-neutral-900 border border-white/10 fill-white !text-white [&_button]:!bg-transparent [&_button]:!border-white/10 hover:[&_button]:!bg-white/10" 
        />
      </ReactFlow>

      {/* Analytics Navigation Bar (Bottom) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 px-6 py-2.5 rounded-full bg-neutral-900/90 backdrop-blur-xl border border-white/10 shadow-2xl text-xs font-semibold tracking-wide text-neutral-400 pointer-events-auto">
        <div className="flex items-center gap-2" title="Speed">
          <Activity size={14} className="text-indigo-400" />
          <span className="text-white min-w-[30px]">{typingSpeed()}</span> chars/sec
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <div className="flex items-center gap-2" title="Keystrokes">
          <Keyboard size={14} className="text-emerald-400" />
          <span className="text-white">{keystrokes.length}</span> strokes
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <div className="flex items-center gap-2" title="Mouse Tracking">
          <MousePointerClick size={14} className="text-blue-400" />
          <span className="text-white">{mouseMoves}</span> moves
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <div className={`flex items-center gap-2 ${pasteCount > 0 ? 'text-rose-400' : 'text-neutral-500'}`} title="Detected Pastes">
          <AlertTriangle size={14} />
          <span className={pasteCount > 0 ? "text-rose-300" : ""}>{pasteCount > 0 ? `${pasteCount} Pastes!` : "Zero Pastes"}</span>
        </div>
      </div>

      {/* Notification Toast */}
      {toast.visible && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl shadow-rose-500/20 text-white font-semibold flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <AlertTriangle size={18} />
          {toast.message}
        </div>
      )}
    </div>
  );
}