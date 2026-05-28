"use client";
import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Send, RefreshCw, X, Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface AIAssistantProps {
  x: number;
  y: number;
  onClose: () => void;
  onInsert: (text: string) => void;
}

export const AIAssistant = ({ x, y, onClose, onInsert }: AIAssistantProps) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const prompts = [
    { label: "💡 Brainstorm ideas", text: "Brainstorm 5 creative ideas or headlines about this topic." },
    { label: "📝 Summarize", text: "Create a clear, concise summary of this section." },
    { label: "✍️ Fix spelling & grammar", text: "Proofread and polish this text for better flow and spelling." },
    { label: "🌐 Translate to Spanish", text: "Translate this content accurately into Spanish." },
  ];

  const handleGenerate = async (customPrompt?: string) => {
    const activePrompt = customPrompt || prompt;
    if (!activePrompt.trim()) return;

    setLoading(true);
    setResult("");

    // Simulate gorgeous AI streaming response for rich, premium interactive feel!
    const responses: Record<string, string> = {
      "brainstorm": "### 💡 Creative Brainstorming:\n1. **Dynamic Workspace Integration**: Seamlessly connect with modern cloud toolsets.\n2. **Aesthetic Minimalism**: Emphasize absolute visual focus with subtle neon glows and deep spacing.\n3. **Real-time Synchronization**: Accelerate parallel collaboration across remote nodes instantly.\n4. **Context-Aware Sidebar**: Dynamic navigation that changes according to user workflows.\n5. **Interactive Interactive Canvas**: Unleash fully dynamic block embeds.",
      "summarize": "### 📝 Executive Summary:\nThis section emphasizes the importance of fluid, minimal, and aesthetic web interfaces that optimize user concentration while maintaining fully dynamic, real-time backend state changes.",
      "fix": "### ✨ Polished Content:\nThis version is cleaned, corrected, and structured with precise sentence flow and spelling to convey premium quality and clarity.",
      "translate": "### 🌐 Traducción en Español:\nEsta sección destaca la importancia de interfaces web fluidas, minimalistas y estéticas que optimizan la concentración del usuario.",
      "default": "### ✨ AI Generated Response:\nHere is a professionally structured paragraph built around your request:\n\nTo maximize focus and productivity, modern digital workspaces must prioritize rich aesthetics, responsive design systems, and rapid synchronization across nodes. This elevates collaborative projects and enables seamless operations."
    };

    let key = "default";
    const lower = activePrompt.toLowerCase();
    if (lower.includes("brainstorm") || lower.includes("ideas")) key = "brainstorm";
    else if (lower.includes("summarize") || lower.includes("summary")) key = "summarize";
    else if (lower.includes("spell") || lower.includes("grammar") || lower.includes("fix")) key = "fix";
    else if (lower.includes("spanish") || lower.includes("translate")) key = "translate";

    const targetResponse = responses[key];
    let currentText = "";
    const words = targetResponse.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      await new Promise((r) => setTimeout(r, 45));
      currentText += (i === 0 ? "" : " ") + words[i];
      setResult(currentText);
    }
    
    setLoading(false);
  };

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

  return (
    <div
      ref={containerRef}
      style={{ top: `${y}px`, left: `${x}px` }}
      className="absolute z-50 w-[420px] rounded-xl border border-purple-500/30 bg-background/95 backdrop-blur-md shadow-2xl p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>NexNote AI Assistant</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-muted rounded-md text-muted-foreground transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>

      {!result && !loading && (
        <div className="flex flex-col gap-1.5">
          <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Suggested prompts</div>
          {prompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleGenerate(p.text)}
              className="text-left text-xs p-2 rounded-lg bg-muted/40 hover:bg-purple-500/10 hover:text-purple-300 border border-transparent hover:border-purple-500/20 transition-all"
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-2 items-center">
        <Input
          placeholder="Ask AI to write or brainstorm..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          className="text-xs focus-visible:ring-purple-500"
          disabled={loading}
        />
        <Button
          size="sm"
          onClick={() => handleGenerate()}
          disabled={loading || !prompt.trim()}
          className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
        >
          {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>

      {result && (
        <div className="flex flex-col gap-3">
          <div className="text-xs bg-muted/50 p-3 rounded-lg border border-muted max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed text-foreground font-light">
            {result}
          </div>
          {!loading && (
            <div className="flex justify-end gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleGenerate()}
                className="text-xs gap-1.5 cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" />
                Retry
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onInsert(result);
                  onClose();
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs gap-1.5 cursor-pointer"
              >
                <Check className="h-3 w-3" />
                Insert into page
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
