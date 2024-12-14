"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { IconPicker } from "./sidebar/icon-picker";
import { ColorPicker } from "./sidebar/color-picker";
import { CustomizationControls } from "./sidebar/customization-controls";
import { ExportButton } from "./sidebar/export-button";

interface SidebarProps {
  onExport: () => void;
}

export function Sidebar({ onExport }: SidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <Tabs defaultValue="icons" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="icons" className="m-0">
            <IconPicker />
          </TabsContent>

          <TabsContent value="colors" className="m-0">
            <ColorPicker />
          </TabsContent>

          <TabsContent value="customize" className="m-0">
            <CustomizationControls />
          </TabsContent>
        </Tabs>
      </Card>
      
      <ExportButton onExport={onExport} />
    </div>
  );
}