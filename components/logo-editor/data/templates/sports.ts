import { Template } from "../../types";
import {
  Trophy, Target, Dumbbell, Bike,
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const sportsTemplates: Template[] = [
  {
    name: "Sports Club",
    icon: Trophy,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "sports"
  },
  {
    name: "Fitness Center",
    icon: Dumbbell,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "sports"
  },
  {
    name: "Cycling Team",
    icon: Bike,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "sports"
  },
  // Add more sports templates...
];