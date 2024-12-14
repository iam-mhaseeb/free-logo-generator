"use client";

import { Input } from "@/components/ui/input";
import { useLogoEditor } from "../logo-editor-context";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorPalette } from "./color-palette";
import { ICON_COLORS, BACKGROUND_COLORS } from "../data/colors";

export function ColorPicker() {
  const { state, updateState } = useLogoEditor();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-4">
          <Label>Icon Color</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={state.iconColor}
              onChange={(e) => updateState({ iconColor: e.target.value })}
              className="w-12 h-12 p-1"
            />
            <Input
              type="text"
              value={state.iconColor}
              onChange={(e) => updateState({ iconColor: e.target.value })}
              className="flex-1"
            />
          </div>
          <Tabs defaultValue="primary">
            <TabsList className="w-full">
              <TabsTrigger value="primary" className="flex-1">Primary</TabsTrigger>
              <TabsTrigger value="neutral" className="flex-1">Neutral</TabsTrigger>
              <TabsTrigger value="accent" className="flex-1">Accent</TabsTrigger>
            </TabsList>
            <TabsContent value="primary" className="mt-2">
              <ColorPalette colors={ICON_COLORS.primary} onSelect={(color) => updateState({ iconColor: color })} />
            </TabsContent>
            <TabsContent value="neutral" className="mt-2">
              <ColorPalette colors={ICON_COLORS.neutral} onSelect={(color) => updateState({ iconColor: color })} />
            </TabsContent>
            <TabsContent value="accent" className="mt-2">
              <ColorPalette colors={ICON_COLORS.accent} onSelect={(color) => updateState({ iconColor: color })} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <Label>Background</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={state.backgroundColor}
              onChange={(e) => updateState({ backgroundColor: e.target.value })}
              className="w-12 h-12 p-1"
            />
            <Input
              type="text"
              value={state.backgroundColor}
              onChange={(e) => updateState({ backgroundColor: e.target.value })}
              className="flex-1"
            />
          </div>
          <Tabs defaultValue="light">
            <TabsList className="w-full">
              <TabsTrigger value="light" className="flex-1">Light</TabsTrigger>
              <TabsTrigger value="subtle" className="flex-1">Subtle</TabsTrigger>
              <TabsTrigger value="gradient" className="flex-1">Gradient</TabsTrigger>
            </TabsList>
            <TabsContent value="light" className="mt-2">
              <ColorPalette colors={BACKGROUND_COLORS.light} onSelect={(color) => updateState({ backgroundColor: color })} />
            </TabsContent>
            <TabsContent value="subtle" className="mt-2">
              <ColorPalette colors={BACKGROUND_COLORS.subtle} onSelect={(color) => updateState({ backgroundColor: color })} />
            </TabsContent>
            <TabsContent value="gradient" className="mt-2">
              <ColorPalette colors={BACKGROUND_COLORS.gradient} onSelect={(color) => updateState({ backgroundColor: color })} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}