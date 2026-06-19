import { Handle, Position, NodeResizer, NodeToolbar, useReactFlow } from "@xyflow/react";
import { Trash2, Pencil } from "lucide-react";
import { useRef } from "react";

export default function ShapeNode({ id, data, selected }: any) {
  const { shape, color = "bg-neutral-800", label = "", image = null } = data;
  const { setNodes } = useReactFlow();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleLabelChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNodes((nds) => 
      nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, label: e.target.value } } : n))
    );
  };

  const changeColor = (newColor: string) => {
    setNodes((nds) => 
      nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, color: newColor } } : n))
    );
  };

  const deleteNode = () => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
  };

  const focusText = () => {
    textareaRef.current?.focus();
  };

  const colors = [
    "bg-red-500", "bg-orange-500", "bg-yellow-500", 
    "bg-emerald-500", "bg-blue-500", "bg-indigo-500", 
    "bg-purple-500", "bg-neutral-800"
  ];

  // Map shape to CSS classes
  let shapeClasses = "w-full h-full flex items-center justify-center relative";
  let contentContainerClasses = "absolute inset-0 flex items-center justify-center p-2";
  
  if (shape === "circle") {
    shapeClasses += " rounded-full border border-white/20 shadow-lg " + color;
  } else if (shape === "triangle") {
    shapeClasses += " [clip-path:polygon(50%_0%,0%_100%,100%_100%)] border border-white/20 shadow-lg " + color;
    contentContainerClasses = "absolute inset-0 flex items-end pb-4 justify-center px-4";
  } else if (shape === "diamond") {
    shapeClasses += " [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] border border-white/20 shadow-lg " + color;
    contentContainerClasses = "absolute inset-0 flex items-center justify-center p-4";
  } else if (shape === "hexagon") {
    shapeClasses += " [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] border border-white/20 shadow-lg " + color;
    contentContainerClasses = "absolute inset-0 flex items-center justify-center p-3";
  } else if (shape === "text") {
    shapeClasses += " bg-transparent text-white";
    contentContainerClasses = "absolute inset-0 flex items-start justify-start p-2";
  } else {
    // Square/Rectangle
    shapeClasses += " rounded-lg border border-white/20 shadow-lg " + color;
  }

  return (
    <>
      <NodeToolbar isVisible={selected} position={Position.Top} className="flex gap-2 items-center p-1.5 px-2 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
        <button onClick={focusText} className="p-1 hover:bg-white/10 rounded-md text-white/70 hover:text-white transition-colors" title="Edit Text">
          <Pencil size={16} />
        </button>
        <button onClick={deleteNode} className="p-1 hover:bg-rose-500/20 rounded-md text-white/70 hover:text-rose-400 transition-colors mr-1" title="Delete Component">
          <Trash2 size={16} />
        </button>
        
        {shape !== "text" && <div className="w-[1px] h-4 bg-white/20 mx-1" />}

        {shape !== "text" && colors.map((c) => (
          <button 
            key={c} 
            className={`w-5 h-5 rounded-full border-2 ${color === c ? 'border-white' : 'border-transparent'} ${c} hover:scale-110 transition-transform`}
            onClick={() => changeColor(c)}
            title="Change Color"
          />
        ))}
      </NodeToolbar>

      <NodeResizer 
        color="#6366f1" 
        isVisible={selected} 
        minWidth={shape === "text" ? 100 : 50} 
        minHeight={shape === "text" ? 40 : 50} 
        handleClassName="w-3 h-3 bg-white border-2 border-indigo-500 rounded-full"
      />

      <div className={`${shapeClasses} transition-colors duration-200 overflow-hidden`}>
        <div className={contentContainerClasses}>
          {image ? (
            <img src={image} className="w-full h-full object-cover rounded-lg pointer-events-none" />
          ) : (
            <textarea
              ref={textareaRef}
              value={label}
              onChange={handleLabelChange}
              placeholder={shape === "text" ? "Type your notes here..." : "..."}
              className={`w-full h-full bg-transparent resize-none outline-none flex items-center justify-center p-0 m-0 hide-scrollbar placeholder:text-white/30 ${shape === "text" ? "text-left text-base" : "text-center text-sm font-medium"}`}
            />
          )}
        </div>
      </div>

      {shape !== "text" && (
        <>
          <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-white/50 border-0" />
          <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-white/50 border-0" />
          <Handle type="source" position={Position.Left} className="w-2 h-2 !bg-white/50 border-0" />
          <Handle type="target" position={Position.Right} className="w-2 h-2 !bg-white/50 border-0" />
        </>
      )}
    </>
  );
}
