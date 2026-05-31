"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bold, Italic, Underline, Sparkles, Highlighter, Check, MessageSquare, Link, Link2Off, X } from "lucide-react";

interface BubbleMenuProps {
  x: number;
  y: number;
  onFormat: (format: string, value?: any) => void;
  onAIAction: (actionType: string) => void;
  onClose: () => void;
  isLink?: boolean;
}

export const BubbleMenu = ({ x, y, onFormat, onAIAction, onClose, isLink }: BubbleMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAISubmenu, setShowAISubmenu] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showLinkInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showLinkInput]);

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
      {showLinkInput ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (urlValue.trim()) {
              onFormat("link", urlValue.trim());
              setUrlValue("");
              setShowLinkInput(false);
            }
          }}
          className="flex items-center gap-1.5 p-1 min-w-[260px]"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Paste or type URL..."
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            className="flex-grow bg-muted/60 border border-muted-foreground/20 rounded-md px-2.5 py-1 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground/60"
          />
          <button
            type="submit"
            disabled={!urlValue.trim()}
            className="p-1.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 rounded-md text-foreground transition-all cursor-pointer"
            title="Apply Link"
          >
            <Check className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              setShowLinkInput(false);
              setUrlValue("");
            }}
            className="p-1.5 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            title="Cancel"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </form>
      ) : !showAISubmenu ? (
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

          {isLink ? (
            <button
              onClick={() => onFormat("link", false)}
              className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 hover:text-red-300 transition-all cursor-pointer"
              title="Remove Link"
            >
              <Link2Off className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowLinkInput(true)}
              className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              title="Add Link"
            >
              <Link className="h-4 w-4" />
            </button>
          )}

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
