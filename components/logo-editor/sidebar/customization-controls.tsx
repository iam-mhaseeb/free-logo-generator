"use client";

import { Slider } from "@/components/ui/slider";
import { useLogoEditor } from "../logo-editor-context";
import { CustomizationControl } from "./customization-control";

export function CustomizationControls() {
  const { state, updateState } = useLogoEditor();

  return (
    <div className="space-y-6">
      <CustomizationControl
        label="Size"
        value={state.iconSize}
        min={16}
        max={200}
        onChange={(value) => updateState({ iconSize: value })}
      />
      
      <CustomizationControl
        label="Rotation"
        value={state.iconRotation}
        min={0}
        max={360}
        onChange={(value) => updateState({ iconRotation: value })}
      />
      
      <CustomizationControl
        label="Opacity"
        value={state.iconOpacity * 100}
        min={0}
        max={100}
        onChange={(value) => updateState({ iconOpacity: value / 100 })}
      />
      
      <CustomizationControl
        label="Padding"
        value={state.padding}
        min={0}
        max={100}
        onChange={(value) => updateState({ padding: value })}
      />
      
      <CustomizationControl
        label="Shadow Blur"
        value={state.shadowBlur}
        min={0}
        max={50}
        onChange={(value) => updateState({ shadowBlur: value })}
      />
      
      <CustomizationControl
        label="Shadow Offset"
        value={state.shadowOffset}
        min={0}
        max={50}
        onChange={(value) => updateState({ shadowOffset: value })}
      />
    </div>
  );
}