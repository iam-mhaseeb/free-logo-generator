"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLogoEditor } from "./logo-editor-context";
import { TEMPLATES } from "./data/templates";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Templates() {
  const { updateState } = useLogoEditor();
  const [search, setSearch] = useState("");
  
  const filteredTemplates = TEMPLATES.filter(template =>
    template.name.toLowerCase().includes(search.toLowerCase())
  );

  const applyTemplate = (template: typeof TEMPLATES[0]) => {
    updateState({
      selectedIcon: template.icon,
      iconColor: template.colors.icon,
      backgroundColor: template.colors.background,
      iconSize: 64,
      iconRotation: 0,
      iconOpacity: 1,
      padding: 20,
      shadowBlur: 10,
      shadowOffset: 5,
    });
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Templates</h3>
      
      <Input
        type="search"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ScrollArea className="h-[calc(100vh-220px)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.name}
                className="p-4 rounded-lg hover:bg-accent flex flex-col items-center gap-2 group"
                onClick={() => applyTemplate(template)}
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: template.colors.background }}
                >
                  <Icon size={32} color={template.colors.icon} />
                </div>
                <span className="text-sm text-center">{template.name}</span>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}