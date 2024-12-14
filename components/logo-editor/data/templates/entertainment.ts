import { Template } from "../../types";
import {
  Music, Film, Gamepad, Theater, Tv, Radio, 
  Headphones, Mic2, Piano, Guitar, Drum,
  VideoIcon, Camera, Popcorn
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const entertainmentTemplates: Template[] = [
  {
    name: "Music Studio",
    icon: Music,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "entertainment"
  },
  {
    name: "Film Production",
    icon: Film,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "entertainment"
  },
  {
    name: "Gaming",
    icon: Gamepad,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "entertainment"
  },
  {
    name: "Theater",
    icon: Theater,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "entertainment"
  },
  // Add more entertainment templates...
];