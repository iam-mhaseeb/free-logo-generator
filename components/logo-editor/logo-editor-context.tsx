"use client";

import { createContext, useContext, useState } from "react";
import { LucideProps } from "lucide-react";

type IconType = (props: LucideProps) => JSX.Element;

interface LogoState {
  selectedIcon: IconType | null;
  iconSize: number;
  iconRotation: number;
  iconColor: string;
  iconOpacity: number;
  backgroundColor: string;
  padding: number;
  shadowColor: string;
  shadowBlur: number;
  shadowOffset: number;
}

interface LogoEditorContextType {
  state: LogoState;
  updateState: (updates: Partial<LogoState>) => void;
}

const LogoEditorContext = createContext<LogoEditorContextType | undefined>(undefined);

export function LogoEditorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LogoState>({
    selectedIcon: null,
    iconSize: 64,
    iconRotation: 0,
    iconColor: "#000000",
    iconOpacity: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowBlur: 10,
    shadowOffset: 5,
  });

  const updateState = (updates: Partial<LogoState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <LogoEditorContext.Provider value={{ state, updateState }}>
      {children}
    </LogoEditorContext.Provider>
  );
}

export function useLogoEditor() {
  const context = useContext(LogoEditorContext);
  if (!context) {
    throw new Error("useLogoEditor must be used within LogoEditorProvider");
  }
  return context;
}