import { Template } from "../../types";
import {
  Leaf, Sun, Cloud, Mountain, Flower2, 
  Droplets, Wind, Sprout, Bird, Fish,
  Recycle, Globe
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const natureTemplates: Template[] = [
  {
    name: "Eco Friendly",
    icon: Leaf,
    colors: TEMPLATE_COLOR_SCHEMES.nature,
    category: "nature"
  },
  {
    name: "Garden Center",
    icon: Leaf,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "nature"
  },
  {
    name: "Environmental",
    icon: Globe,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "nature"
  },
  {
    name: "Recycling",
    icon: Recycle,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "nature"
  },
  // Add more nature templates...
];