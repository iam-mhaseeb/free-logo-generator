"use client";

import { useState } from "react";
import { EditorCanvas } from "./editor-canvas";
import { Toolbar } from "./toolbar";
import { Sidebar } from "./sidebar";
import { ExportDialog } from "./export-dialog";
import { Templates } from "./templates";
import { LogoEditorProvider } from "./logo-editor-context";

export function LogoEditor() {
  const [showExportDialog, setShowExportDialog] = useState(false);

  return (
    <LogoEditorProvider>
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1800px] mx-auto">
        <div className="w-full lg:w-[300px]">
          <Templates />
        </div>
        
        <div className="flex-1">
          <EditorCanvas />
        </div>

        <div className="w-full lg:w-[300px] space-y-6">
          <Sidebar onExport={() => setShowExportDialog(true)} />
        </div>
      </div>
      <ExportDialog open={showExportDialog} onOpenChange={setShowExportDialog} />
    </LogoEditorProvider>
  );
}