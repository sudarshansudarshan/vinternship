import { Square, Circle, Triangle, Diamond, Hexagon, Image as ImageIcon, Type, Sparkles } from "lucide-react";

interface Props {
  onInsertShape: (shape: string) => void;
  onInsertImage: (file: File) => void;
  onInsertText: () => void;
}

export default function RightSidebar({ onInsertShape, onInsertImage, onInsertText }: Props) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onInsertImage(e.target.files[0]);
    }
  };

  return (
    <div className="w-64 border-l border-white/10 bg-neutral-900/50 backdrop-blur-xl p-4 flex flex-col gap-6">
      <div>
        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Sparkles size={14} className="text-indigo-400" /> Elements
        </h3>
        
        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={() => onInsertShape('square')}
            className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-300 transition-all group"
            title="Insert Square"
          >
            <Square size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => onInsertShape('circle')}
            className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-300 transition-all group"
            title="Insert Circle"
          >
            <Circle size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => onInsertShape('triangle')}
            className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 transition-all group"
            title="Insert Triangle"
          >
            <Triangle size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => onInsertShape('hexagon')}
            className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:text-yellow-300 transition-all group"
            title="Insert Hexagon"
          >
            <Hexagon size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => onInsertShape('diamond')}
            className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all group"
            title="Insert Diamond"
          >
            <Diamond size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/5" />

      <div>
        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Media</h3>
        
        <label className="flex items-center justify-center gap-2 p-3 w-full rounded-lg border border-dashed border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors hover:border-indigo-500 text-sm font-medium text-neutral-300 hover:text-white">
          <ImageIcon size={18} />
          Upload Image
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageUpload}
          />
        </label>
      </div>
      
      <div className="h-[1px] w-full bg-white/5" />
      
      <div>
        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Text</h3>
        <button 
          onClick={onInsertText}
          className="flex items-center justify-start gap-3 p-3 w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 text-sm font-medium text-white"
        >
          <Type size={18} />
          Insert Text Block
        </button>
      </div>

    </div>
  );
}
