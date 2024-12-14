import { IconType } from "../types";
import * as Icons from "lucide-react";

export function getFilteredIcons(search: string) {
  return Object.entries(Icons)
    .filter(([name]) => 
      name !== "createLucideIcon" && 
      name !== "default" && 
      typeof Icons[name] === "function" &&
      name.toLowerCase().includes(search.toLowerCase())
    )
    .map(([name, Icon]) => ({ 
      name, 
      Icon: Icon as IconType 
    }));
}