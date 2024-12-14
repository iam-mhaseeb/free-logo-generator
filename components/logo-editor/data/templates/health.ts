import { Template } from "../../types";
import {
  Heart, Activity, Stethoscope, Brain, Dumbbell,
  Pill, Microscope, Hospital, Syringe, Apple,
  Bike, Leaf,
  PlusCircle
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const healthTemplates: Template[] = [
  {
    name: "Healthcare",
    icon: Heart,
    colors: {
      icon: "#DC2626",
      background: "#FEF2F2",
    },
    category: "health",
  },
  {
    name: "Medical Practice",
    icon: Stethoscope,
    colors: {
      icon: "#0EA5E9",
      background: "#F0F9FF",
    },
    category: "health",
  },
  {
    name: "Mental Health",
    icon: Brain,
    colors: {
      icon: "#8B5CF6",
      background: "#F5F3FF",
    },
    category: "health",
  },
  {
    name: "Fitness Center",
    icon: Dumbbell,
    colors: {
      icon: "#2563EB",
      background: "#EFF6FF",
    },
    category: "health",
  },
  {
    name: "Pharmacy",
    icon: Pill,
    colors: {
      icon: "#0891B2",
      background: "#ECFEFF",
    },
    category: "health",
  },
  {
    name: "Emergency Care",
    icon: PlusCircle,
    colors: {
      icon: "#DC2626",
      background: "#FEF2F2",
    },
    category: "health",
  },
  {
    name: "Laboratory",
    icon: Microscope,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "health",
  },
  {
    name: "Hospital",
    icon: Hospital,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "health",
  },
  {
    name: "Vaccination",
    icon: Syringe,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "health",
  },
  {
    name: "Nutrition",
    icon: Apple,
    colors: {
      icon: "#15803D",
      background: "#F0FDF4",
    },
    category: "health",
  },
  {
    name: "Cycling Club",
    icon: Bike,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "health",
  },
  {
    name: "Wellness Center",
    icon: Leaf,
    colors: {
      icon: "#15803D",
      background: "#F0FDF4",
    },
    category: "health",
  },
];