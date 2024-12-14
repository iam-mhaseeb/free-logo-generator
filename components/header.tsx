"use client";

import { ModeToggle } from "./mode-toggle";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          Logo Generator
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}