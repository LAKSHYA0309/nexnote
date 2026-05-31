"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heading1, Heading2, Heading3, List, ListOrdered, CheckSquare, Terminal, Sparkles, MessageSquare, FileText, Layout, Calendar, Table, Link2, FileSymlink } from "lucide-react";

interface SlashMenuItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: "Basic Blocks" | "Templates & Advanced";
}

interface SlashMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export const SlashMenu = ({ x, y, onClose, onSelect }: SlashMenuProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const items: SlashMenuItem[] = [
    {
      id: "ai",
      label: "AI Writing Assistant",
      description: "Brainstorm, summarize, or fix grammar with AI.",
      icon: <Sparkles className="h-4 w-4 text-purple-400" />,
      action: () => onSelect("ai"),
      category: "Basic Blocks",
    },
    {
      id: "h1",
      label: "Heading 1",
      description: "Big section heading.",
      icon: <Heading1 className="h-4 w-4" />,
      action: () => onSelect("h1"),
      category: "Basic Blocks",
    },
    {
      id: "h2",
      label: "Heading 2",
      description: "Medium section heading.",
      icon: <Heading2 className="h-4 w-4" />,
      action: () => onSelect("h2"),
      category: "Basic Blocks",
    },
    {
      id: "h3",
      label: "Heading 3",
      description: "Small section heading.",
      icon: <Heading3 className="h-4 w-4" />,
      action: () => onSelect("h3"),
      category: "Basic Blocks",
    },
    {
      id: "bullet",
      label: "Bulleted list",
      description: "Create a simple bulleted list.",
      icon: <List className="h-4 w-4" />,
      action: () => onSelect("bullet"),
      category: "Basic Blocks",
    },
    {
      id: "ordered",
      label: "Numbered list",
      description: "Create a list with numbering.",
      icon: <ListOrdered className="h-4 w-4" />,
      action: () => onSelect("ordered"),
      category: "Basic Blocks",
    },
    {
      id: "todo",
      label: "To-do list",
      description: "Track tasks with a checklist.",
      icon: <CheckSquare className="h-4 w-4" />,
      action: () => onSelect("todo"),
      category: "Basic Blocks",
    },
    {
      id: "code",
      label: "Code block",
      description: "Insert pre-styled code block.",
      icon: <Terminal className="h-4 w-4" />,
      action: () => onSelect("code"),
      category: "Basic Blocks",
    },
    {
      id: "callout",
      label: "Callout",
      description: "Make writing stand out with an icon.",
      icon: <MessageSquare className="h-4 w-4 text-orange-400" />,
      action: () => onSelect("callout"),
      category: "Basic Blocks",
    },
    {
      id: "link-bookmark",
      label: "Web Bookmark",
      description: "Insert a visual link bookmark card.",
      icon: <Link2 className="h-4 w-4 text-emerald-400" />,
      action: () => onSelect("link-bookmark"),
      category: "Basic Blocks",
    },
    {
      id: "table",
      label: "Grid Table",
      description: "Insert a customizable tracking table.",
      icon: <Table className="h-4 w-4 text-teal-400" />,
      action: () => onSelect("table"),
      category: "Templates & Advanced",
    },
    {
      id: "tpl-meeting",
      label: "Meeting Notes Template",
      description: "Agenda, Action items, and attendee tables.",
      icon: <FileText className="h-4 w-4 text-blue-400" />,
      action: () => onSelect("tpl-meeting"),
      category: "Templates & Advanced",
    },
    {
      id: "tpl-roadmap",
      label: "Project Taskboard Template",
      description: "Track targets, timelines, and objectives.",
      icon: <Layout className="h-4 w-4 text-pink-400" />,
      action: () => onSelect("tpl-roadmap"),
      category: "Templates & Advanced",
    },
    {
      id: "tpl-planner",
      label: "Weekly Planner Template",
      description: "Organize days of the week with checklists.",
      icon: <Calendar className="h-4 w-4 text-indigo-400" />,
      action: () => onSelect("tpl-planner"),
      category: "Templates & Advanced",
    },
    {
      id: "link-page",
      label: "Link to page",
      description: "Link to an existing folder or file.",
      icon: <FileSymlink className="h-4 w-4 text-purple-400" />,
      action: () => onSelect("link-page"),
      category: "Templates & Advanced",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        items[selectedIndex].action();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Group items by category
  const categories = ["Basic Blocks", "Templates & Advanced"] as const;

  return (
    <div
      ref={menuRef}
      style={{ top: `${y}px`, left: `${x}px` }}
      className="absolute z-50 w-72 rounded-xl border border-muted bg-background/95 backdrop-blur-md shadow-2xl p-1.5 max-h-[380px] overflow-y-auto"
    >
      {categories.map((cat) => {
        const catItems = items.filter((i) => i.category === cat);
        return (
          <div key={cat} className="flex flex-col gap-0.5">
            <div className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              {cat}
            </div>
            {catItems.map((item) => {
              const globalIdx = items.findIndex((i) => i.id === item.id);
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-start gap-3 px-2 py-1.5 rounded-lg text-left transition-all ${
                    selectedIndex === globalIdx
                      ? "bg-primary/10 text-primary-foreground border-l-2 border-primary"
                      : "hover:bg-muted/60 text-muted-foreground"
                  }`}
                >
                  <div className={`p-1.5 rounded-md ${selectedIndex === globalIdx ? "bg-primary/20" : "bg-muted"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground line-clamp-1">{item.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
