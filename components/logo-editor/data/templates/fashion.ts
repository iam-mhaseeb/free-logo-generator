import { Template } from "../../types";
import {
  Scissors, ShoppingBag, Shirt, Crown, Gem, Glasses, 
  Heart, Watch, Palette, Brush, Camera, Sparkles, Umbrella, Wand2
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const fashionTemplates: Template[] = [
  {
    name: "Fashion Boutique",
    icon: Shirt,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "fashion"
  },
  {
    name: "Luxury Brand",
    icon: Crown,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "fashion"
  },
  {
    name: "Jewelry Store",
    icon: Gem,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "fashion"
  },
  {
    name: "Eyewear Brand",
    icon: Glasses,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "fashion"
  },
  {
    name: "Beauty Salon",
    icon: Scissors,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "fashion"
  },
  {
    name: "Cosmetics",
    icon: Sparkles,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "fashion"
  },
  {
    name: "Fashion Photography",
    icon: Camera,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "fashion"
  },
  {
    name: "Accessories",
    icon: Watch,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "fashion"
  },
  // Add more fashion templates...
];