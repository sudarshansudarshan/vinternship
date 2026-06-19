import type { Note } from "../types";
import { Plus, BookOpen, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  notes: Note[];
  activeNoteId?: number;
  setActiveNote: (note: Note) => void;
  addNote: () => void;
}
export default function Sidebar({ notes, activeNoteId, setActiveNote, addNote }: Props) {
  return (
    <div className="w-64 border-r border-white/10 bg-neutral-900/50 backdrop-blur-xl h-full flex flex-col pt-6">
      <div className="px-6 mb-8 flex items-center gap-3 relative">
        <div className="flex relative justify-center items-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20">
          <Layers className="text-white relative z-10" size={20} />
          <div className="absolute inset-0 bg-white/20 blur-md rounded-xl" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white m-0">
          Vi-Notes
        </h1>
      </div>

      <div className="px-4 mb-4">
        <button 
          onClick={addNote}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-medium text-white transition-all group"
        >
          <Plus size={16} className="text-neutral-400 group-hover:text-white transition-colors" /> 
          New Document
        </button>
      </div>

      <div className="px-4 flex-1 overflow-y-auto pb-6">
        <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 px-2">Documents</h3>
        <AnimatePresence>
          <div className="flex flex-col gap-1">
            {notes.map(note => {
              const isActive = note.id === activeNoteId;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={note.id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                    isActive 
                      ? "bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shadow-inner" 
                      : "bg-transparent border border-transparent text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
                  }`}
                  onClick={() => setActiveNote(note)}
                >
                  <BookOpen size={16} className={isActive ? "text-indigo-400" : "text-neutral-500"} />
                  <span className="truncate text-sm font-medium">{note.title || "Untitled Document"}</span>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}