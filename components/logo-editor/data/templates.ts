import { 
  Activity, Aperture, Atom, Box, CircuitBoard, Compass, 
  Database, Fingerprint, Rocket, Palette, Code, Globe,
  Shield, Zap, Cloud, Terminal, Cpu, Layers, Monitor,
  Settings, Share2, Smartphone, Brush, Camera, Coffee,
  Droplet, Feather, Flame, Heart, Leaf, Music, Puzzle,
  Star, Sun, Target, Umbrella
} from "lucide-react";
import { Template } from "../types";
import { TEMPLATES as TEMPL } from "./templates/index";

export const TEMPLATES: Template[] = [
  {
    name: "Modern Tech",
    icon: CircuitBoard,
    colors: {
      icon: "#0EA5E9",
      background: "#F0F9FF",
    }
  },
  {
    name: "Creative Studio",
    icon: Brush,
    colors: {
      icon: "#EC4899",
      background: "#FDF4FF",
    }
  },
  {
    name: "Photography",
    icon: Camera,
    colors: {
      icon: "#6366F1",
      background: "#EEF2FF",
    }
  },
  {
    name: "Coffee Shop",
    icon: Coffee,
    colors: {
      icon: "#92400E",
      background: "#FFFBEB",
    }
  },
  {
    name: "Water Brand",
    icon: Droplet,
    colors: {
      icon: "#0EA5E9",
      background: "#F0F9FF",
    }
  },
  {
    name: "Writing",
    icon: Feather,
    colors: {
      icon: "#6B7280",
      background: "#F9FAFB",
    }
  },
  {
    name: "Energy",
    icon: Flame,
    colors: {
      icon: "#DC2626",
      background: "#FEF2F2",
    }
  },
  {
    name: "Healthcare",
    icon: Heart,
    colors: {
      icon: "#EC4899",
      background: "#FDF2F8",
    }
  },
  {
    name: "Nature",
    icon: Leaf,
    colors: {
      icon: "#10B981",
      background: "#ECFDF5",
    }
  },
  {
    name: "Music Studio",
    icon: Music,
    colors: {
      icon: "#8B5CF6",
      background: "#F5F3FF",
    }
  },
  {
    name: "Gaming",
    icon: Puzzle,
    colors: {
      icon: "#6366F1",
      background: "#EEF2FF",
    }
  },
  {
    name: "Startup",
    icon: Rocket,
    colors: {
      icon: "#F43F5E",
      background: "#FFF1F2",
    }
  },
  {
    name: "Premium",
    icon: Star,
    colors: {
      icon: "#F59E0B",
      background: "#FFFBEB",
    }
  },
  {
    name: "Weather",
    icon: Sun,
    colors: {
      icon: "#F59E0B",
      background: "#FFFBEB",
    }
  },
  {
    name: "Marketing",
    icon: Target,
    colors: {
      icon: "#EF4444",
      background: "#FEF2F2",
    }
  },
  {
    name: "Insurance",
    icon: Umbrella,
    colors: {
      icon: "#3B82F6",
      background: "#EFF6FF",
    }
  },
  // Tech templates
  {
    name: "Cloud Platform",
    icon: Cloud,
    colors: {
      icon: "#0EA5E9",
      background: "#F0F9FF",
    }
  },
  {
    name: "Developer Tools",
    icon: Code,
    colors: {
      icon: "#6366F1",
      background: "#EEF2FF",
    }
  },
  {
    name: "Global Network",
    icon: Globe,
    colors: {
      icon: "#14B8A6",
      background: "#F0FDFA",
    }
  },
  {
    name: "Smart Device",
    icon: Smartphone,
    colors: {
      icon: "#8B5CF6",
      background: "#F5F3FF",
    }
  },
  ...TEMPL
];