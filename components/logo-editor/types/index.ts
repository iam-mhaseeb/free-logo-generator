import { LucideIcon } from "lucide-react";

export type IconType = LucideIcon;

export interface LogoState {
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

export interface Template {
  name: string;
  icon: LucideIcon,
  colors: {
    icon: string;
    background: string;
  };
  category: string;
}