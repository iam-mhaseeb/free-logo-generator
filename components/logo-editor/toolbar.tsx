"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useLogoEditor } from "./logo-editor-context";
import { Download } from "lucide-react";

interface ToolbarProps {
  onExport: () => void;
}

export function Toolbar({ onExport }: ToolbarProps) {
  const { state, updateState } = useLogoEditor();

  return (
    <Card className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Icon Size</label>
          <Slider
            value={[state.iconSize]}
            min={16}
            max={200}
            step={1}
            onValueChange={([value]) => updateState({ iconSize: value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Rotation</label>
          <Slider
            value={[state.iconRotation]}
            min={0}
            max={360}
            step={1}
            onValueChange={([value]) => updateState({ iconRotation: value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Opacity</label>
          <Slider
            value={[state.iconOpacity * 100]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateState({ iconOpacity: value / 100 })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Padding</label>
          <Slider
            value={[state.padding]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateState({ padding: value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Shadow Blur</label>
          <Slider
            value={[state.shadowBlur]}
            min={0}
            max={50}
            step={1}
            onValueChange={([value]) => updateState({ shadowBlur: value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Shadow Offset</label>
          <Slider
            value={[state.shadowOffset]}
            min={0}
            max={50}
            step={1}
            onValueChange={([value]) => updateState({ shadowOffset: value })}
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={onExport} className="gap-2">
          <Download size={16} />
          Export Logo
        </Button>
      </div>
    </Card>
  );
}