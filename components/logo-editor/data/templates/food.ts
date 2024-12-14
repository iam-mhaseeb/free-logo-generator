import { Template } from "../../types";
import {
  UtensilsCrossed, Coffee, Pizza, Sandwich, Wine, Cake, 
  Apple, IceCream, Fish, Beef, Soup, Carrot, Cookie,
  ChefHat, Store, ShoppingBag
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const foodTemplates: Template[] = [
  {
    name: "Restaurant",
    icon: UtensilsCrossed,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "food",
  },
  {
    name: "Cafe",
    icon: Coffee,
    colors: {
      icon: "#92400E",
      background: "#FFFBEB",
    },
    category: "food",
  },
  {
    name: "Pizzeria",
    icon: Pizza,
    colors: {
      icon: "#DC2626",
      background: "#FEF2F2",
    },
    category: "food",
  },
  {
    name: "Bakery",
    icon: Cake,
    colors: {
      icon: "#EC4899",
      background: "#FDF2F8",
    },
    category: "food",
  },
  {
    name: "Wine Bar",
    icon: Wine,
    colors: {
      icon: "#7C3AED",
      background: "#F5F3FF",
    },
    category: "food",
  },
  {
    name: "Ice Cream Shop",
    icon: IceCream,
    colors: {
      icon: "#F59E0B",
      background: "#FFFBEB",
    },
    category: "food",
  },
  {
    name: "Seafood Restaurant",
    icon: Fish,
    colors: {
      icon: "#0EA5E9",
      background: "#F0F9FF",
    },
    category: "food",
  },
  {
    name: "Steakhouse",
    icon: Beef,
    colors: {
      icon: "#B91C1C",
      background: "#FEF2F2",
    },
    category: "food",
  },
  {
    name: "Soup Kitchen",
    icon: Soup,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "food",
  },
  {
    name: "Organic Store",
    icon: Carrot,
    colors: {
      icon: "#15803D",
      background: "#F0FDF4",
    },
    category: "food",
  },
  {
    name: "Cookie Shop",
    icon: Cookie,
    colors: {
      icon: "#92400E",
      background: "#FFFBEB",
    },
    category: "food",
  },
  {
    name: "Chef Services",
    icon: ChefHat,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "food",
  },
  {
    name: "Grocery Store",
    icon: Store,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "food",
  },
  {
    name: "Food Delivery",
    icon: ShoppingBag,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "food",
  },
];