"use client";

interface ColorPaletteProps {
  colors: string[];
  onSelect: (color: string) => void;
}

export function ColorPalette({ colors, onSelect }: ColorPaletteProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <button
          key={color}
          className="w-8 h-8 rounded-lg border border-border hover:scale-110 transition-transform"
          style={{ background: color }}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  );
}