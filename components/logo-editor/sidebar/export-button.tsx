"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

interface ExportButtonProps {
  onExport: () => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <Card className="p-4">
      <Button onClick={onExport} className="w-full gap-2">
        <Download size={16} />
        Export Logo
      </Button>
    </Card>
  );
}