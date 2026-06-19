import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import RightSidebar from "./components/RightSidebar";
import type { Note } from "./types";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [insertSignal, setInsertSignal] = useState<{ type: string, payload: any } | null>(null);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Document",
      content: ""
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
  };

  const updateNote = (updated: Note) => {
    setNotes(prev => prev.map(n => n.id === updated.id ? updated : n));
    if (activeNote?.id === updated.id) {
      setActiveNote(updated);
    }
  };

  const handleInsertShape = (shape: string) => {
    if (!activeNote) return;
    setInsertSignal({ type: "shape", payload: shape });
    setTimeout(() => setInsertSignal(null), 100);
  };

  const handleInsertImage = (file: File) => {
    if (!activeNote) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setInsertSignal({ type: "image", payload: e.target?.result });
      setTimeout(() => setInsertSignal(null), 100);
    };
    reader.readAsDataURL(file);
  };

  const handleInsertText = () => {
    if (!activeNote) return;
    setInsertSignal({ type: "text", payload: null });
    setTimeout(() => setInsertSignal(null), 100);
  };

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Left Sidebar */}
      <Sidebar 
        notes={notes} 
        activeNoteId={activeNote?.id}
        setActiveNote={setActiveNote} 
        addNote={addNote} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative h-full">
        {activeNote ? (
          <Editor 
            note={activeNote} 
            updateNote={updateNote} 
            insertSignal={insertSignal} 
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-neutral-500">
            <div className="h-24 w-24 bg-neutral-900 rounded-3xl mb-6 shadow-2xl flex items-center justify-center border border-white/5">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-xl font-medium tracking-tight text-neutral-400">No Document Selected</h2>
            <p className="text-sm mt-2 max-w-sm text-center">
              Select a document from the sidebar or click <button onClick={addNote} className="text-indigo-400 font-semibold hover:underline">New Document</button> to start creating.
            </p>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <RightSidebar 
        onInsertShape={handleInsertShape}
        onInsertImage={handleInsertImage}
        onInsertText={handleInsertText}
      />

    </div>
  );
}