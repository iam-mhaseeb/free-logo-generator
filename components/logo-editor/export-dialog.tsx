"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLogoEditor } from "./logo-editor-context";
import { exportLogo } from "./utils/export";
import { PRESET_SIZES } from "./data/export-sizes";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExportDialog({ open, onOpenChange }: ExportDialogProps) {
  const [customWidth, setCustomWidth] = useState("512");
  const [customHeight, setCustomHeight] = useState("512");
  const [exporting, setExporting] = useState(false);
  const { state } = useLogoEditor();

  const handleExport = async (width: number, height: number) => {
    try {
      setExporting(true);
      await exportLogo(width, height, state);
    } finally {
      setExporting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Logo</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            {PRESET_SIZES.map((size) => (
              <Button
                key={size.name}
                variant="outline"
                onClick={() => handleExport(size.width, size.height)}
                disabled={exporting}
              >
                {size.name} ({size.width}x{size.height})
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <Label>Custom Size</Label>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Input
                  type="number"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(e.target.value)}
                  placeholder="Width"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Input
                  type="number"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(e.target.value)}
                  placeholder="Height"
                />
              </div>
            </div>
            <Button
              className="w-full"
              onClick={() => handleExport(Number(customWidth), Number(customHeight))}
              disabled={exporting}
            >
              {exporting ? "Exporting..." : "Export Custom Size"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}