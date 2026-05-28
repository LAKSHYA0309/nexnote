"use client";
import React, { useEffect, useRef } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

interface CoverGalleryProps {
  onClose: () => void;
  onSelect: (url: string) => void;
}

export const CoverGallery = ({ onClose, onSelect }: CoverGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const presets = [
    {
      name: "Nebula Haze",
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Neon Horizon",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Minimal Sunset",
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Silent Forest",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Deep Ocean",
      url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Desert Dunes",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    },
  ];

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={containerRef}
        className="w-[540px] rounded-xl border border-muted bg-background/95 backdrop-blur-md shadow-2xl p-5 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <ImageIcon className="h-4 w-4" />
            <span>Choose from Cover Gallery</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-md text-muted-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                onSelect(preset.url);
                onClose();
              }}
              className="group relative h-24 rounded-lg overflow-hidden border border-muted hover:border-primary/50 transition-all text-left"
            >
              <img
                src={preset.url}
                alt={preset.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                <span className="text-xs font-medium text-white tracking-wide">{preset.name}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-1">
          <Button variant="outline" size="sm" onClick={onClose} className="text-xs cursor-pointer">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
