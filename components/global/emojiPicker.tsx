"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Popover,PopoverContent,PopoverTrigger } from "../ui/popover";

type prop = {
  getvalues?: (emoji: string) => void;
  children: React.ReactNode;
};

const EmojiPicker = ({ getvalues, children }: prop) => { 
    const [open,setopen] =useState(false)
  const Picker = dynamic(() => import("emoji-picker-react"),{ssr:false});
  const onClick = (selectedemoji: any, ) => { 
    console.log(selectedemoji,"emoji")
    if (getvalues) getvalues(selectedemoji.emoji); 
    setopen(false)
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setopen}>
        <PopoverTrigger asChild type="button" className="cursor-pointer">
           <span> 
            {children}
            </span> 
            </PopoverTrigger>
        <PopoverContent
          className="p-0
          border-none"
        >
          <Picker onEmojiClick={onClick}  height={350} width={450} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EmojiPicker;
