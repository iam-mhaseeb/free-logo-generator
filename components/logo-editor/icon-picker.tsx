"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useLogoEditor } from "./logo-editor-context";
import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";
import { useState } from "react";

type IconType = (props: LucideProps) => JSX.Element;

export function IconPicker() {
  const { updateState } = useLogoEditor();
  const [search, setSearch] = useState("");

  const iconList = Object.entries(Icons)
    .filter(([name]) => 
      name !== "createLucideIcon" && 
      name !== "default" && 
      typeof Icons[name] === "function" &&
      name.toLowerCase().includes(search.toLowerCase())
    )
    .map(([name, Icon]) => ({ 
      name, 
      Icon: Icon as IconType 
    }));
  

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Icons</h3>
      
      <Input
        type="search"
        placeholder="Search icons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <ScrollArea className="h-[300px]">
        <div className="grid grid-cols-4 gap-4">
          {iconList.map(({ name, Icon }) => (
            <button
              key={name}
              className="p-2 rounded-lg hover:bg-accent flex flex-col items-center gap-1"
              onClick={() => updateState({ selectedIcon: Icon })}
            >
              <Icon size={24} />
              <span className="text-xs text-muted-foreground truncate w-full text-center">
                {name}
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}