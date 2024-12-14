import { Template } from "../../types";
import {
  Palette, Brush, Camera, Film, Music, Pencil, Theater, 
  VideoIcon, Wand2, Aperture, Frame, Gamepad2, 
  Image, Lightbulb, Paintbrush, Piano, Podcast, Pen, Scissors,
  School2
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const creativeTemplates: Template[] = [
  {
    name: "Art Studio",
    icon: Palette,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "creative",
  },
  {
    name: "Design Agency",
    icon: Brush,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "creative",
  },
  {
    name: "Photography",
    icon: Camera,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "creative",
  },
  {
    name: "Film Production",
    icon: Film,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "creative",
  },
  {
    name: "Music Studio",
    icon: Music,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "creative",
  },
  {
    name: "Art Gallery",
    icon: Frame,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "creative",
  },
  {
    name: "Gaming Studio",
    icon: Gamepad2,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "creative",
  },
  {
    name: "Creative Agency",
    icon: Lightbulb,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "creative",
  },
  {
    name: "Digital Art",
    icon: Paintbrush,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "creative",
  },
  {
    name: "Music School",
    icon: Piano,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "creative",
  },
  {
    name: "Podcast Studio",
    icon: Podcast,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "creative",
  },
  {
    name: "Theater Arts",
    icon: Theater,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "creative",
  },
  {
    name: "Video Production",
    icon: VideoIcon,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "creative",
  },
  {
    name: "Magic Shows",
    icon: Wand2,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "creative",
  },
  {
    name: "Photography Studio",
    icon: Aperture,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "creative",
  },
  {
    name: "Art School",
    icon: School2,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "creative",
  },
  {
    name: "Digital Media",
    icon: Image,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "creative",
  },
  {
    name: "Writing Studio",
    icon: Pen,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "creative",
  },
];