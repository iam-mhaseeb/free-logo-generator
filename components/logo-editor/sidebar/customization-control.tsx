"use client";

import { Slider } from "@/components/ui/slider";

interface CustomizationControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export function CustomizationControl({
  label,
  value,
  min,
  max,
  onChange,
}: CustomizationControlProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={1}
        onValueChange={([value]) => onChange(value)}
      />
    </div>
  );
}