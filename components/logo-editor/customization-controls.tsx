"use client";

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useLogoEditor } from "./logo-editor-context";

export function CustomizationControls() {
  const { state, updateState } = useLogoEditor();

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-lg font-semibold">Customize</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Size</label>
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
    </Card>
  );
}