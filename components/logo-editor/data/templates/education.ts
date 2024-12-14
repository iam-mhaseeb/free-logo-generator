import { Template } from "../../types";
import {
  GraduationCap, Book, School, Library, PenTool, Calculator,
  Globe, Microscope, Atom, Trophy, Award, BookOpen, Presentation,
  Users, Laptop, Lightbulb, Notebook, Ruler
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const educationTemplates: Template[] = [
  {
    name: "University",
    icon: GraduationCap,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "education"
  },
  {
    name: "School",
    icon: School,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "education"
  },
  {
    name: "Library",
    icon: Library,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "education"
  },
  {
    name: "Online Learning",
    icon: Laptop,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "education"
  },
  {
    name: "Science Education",
    icon: Microscope,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "education"
  },
  {
    name: "Physics Academy",
    icon: Atom,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "education"
  },
  {
    name: "Achievement Center",
    icon: Trophy,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "education"
  },
  {
    name: "Study Group",
    icon: Users,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "education"
  },
  {
    name: "Innovation Lab",
    icon: Lightbulb,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "education"
  },
  {
    name: "Math Academy",
    icon: Calculator,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "education"
  },
  // Add more education templates...
];