"use client";

import { useRef } from "react";
import { useLogoEditor } from "./logo-editor-context";
import { Card } from "@/components/ui/card";
import { renderIcon } from "./utils/icon-renderer";

export function EditorCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { state } = useLogoEditor();

  return (
    <Card className="p-6">
      <div className="aspect-square w-full max-w-[600px] mx-auto">
        <div
          ref={canvasRef}
          className="logo-canvas w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            background: state.backgroundColor,
            padding: `${state.padding}px`,
            boxShadow: `${state.shadowOffset}px ${state.shadowOffset}px ${state.shadowBlur}px ${state.shadowColor}`,
          }}
        >
          {renderIcon(state.selectedIcon, {
            size: state.iconSize,
            color: state.iconColor,
            opacity: state.iconOpacity,
            rotation: state.iconRotation,
          })}
        </div>
      </div>
    </Card>
  );
}