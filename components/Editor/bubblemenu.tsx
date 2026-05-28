"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bold, Italic, Underline, Sparkles, Highlighter, Check, MessageSquare } from "lucide-react";

interface BubbleMenuProps {
  x: number;
  y: number;
  onFormat: (format: string, value?: any) => void;
  onAIAction: (actionType: string) => void;
  onClose: () => void;
}

export const BubbleMenu = ({ x, y, onFormat, onAIAction, onClose }: BubbleMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAISubmenu, setShowAISubmenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const aiActions = [
    { id: "summarize", label: "📝 Summarize Highlight", desc: "Shorten and capture main points." },
    { id: "explain", label: "💡 Explain this", desc: "Define or clarify context." },
    { id: "spelling", label: "✨ Fix spelling & grammar", desc: "Polish writing." },
  ];

  return (
    <div
      ref={containerRef}
      style={{ top: `${y}px`, left: `${x}px`, transform: "translate(-50%, -100%)" }}
      className="absolute z-50 flex flex-col gap-1 rounded-xl border border-muted bg-background/95 backdrop-blur-md shadow-2xl p-1.5 min-w-[220px]"
    >
      {!showAISubmenu ? (
        <div className="flex items-center gap-1">
          <button
            onClick={() => onFormat("bold")}
            className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all"
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            onClick={() => onFormat("italic")}
            className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all"
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            onClick={() => onFormat("underline")}
            className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all"
            title="Underline"
          >
            <Underline className="h-4 w-4" />
          </button>
          <button
            onClick={() => onFormat("background", "rgba(168, 85, 247, 0.2)")}
            className="p-2 hover:bg-muted rounded-lg text-purple-400 hover:text-purple-300 transition-all"
            title="Highlight Text"
          >
            <Highlighter className="h-4 w-4" />
          </button>

          <div className="w-[1px] h-5 bg-muted mx-1" />

          <button
            onClick={() => setShowAISubmenu(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 hover:text-purple-300 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Ask AI</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 p-1">
          <div className="flex items-center justify-between px-1.5 py-0.5 mb-1.5">
            <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">AI Edit Highlight</span>
            <button
              onClick={() => setShowAISubmenu(false)}
              className="text-[10px] text-muted-foreground hover:text-foreground hover:underline"
            >
              Back
            </button>
          </div>
          {aiActions.map((action) => (
            <button
              key={action.id}
              onClick={() => onAIAction(action.id)}
              className="w-full flex flex-col items-start px-2.5 py-1.5 rounded-lg hover:bg-purple-500/10 text-left transition-all"
            >
              <span className="text-xs font-medium text-foreground">{action.label}</span>
              <span className="text-[9px] text-muted-foreground">{action.desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
