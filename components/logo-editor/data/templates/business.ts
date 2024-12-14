import { Template } from "../../types";
import { Building2, Briefcase, ChartBar, HandshakeIcon, Target, TrendingUp, Award, Shield, Globe2 } from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const businessTemplates: Template[] = [
  {
    name: "Corporate Office",
    icon: Building2,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "business",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "business",
  },
  {
    name: "Analytics",
    icon: ChartBar,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "business",
  },
  {
    name: "Business Partnership",
    icon: HandshakeIcon,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "business",
  },
  {
    name: "Business Goals",
    icon: Target,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "business",
  },
  {
    name: "Growth Business",
    icon: TrendingUp,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "business",
  },
  {
    name: "Business Excellence",
    icon: Award,
    colors: TEMPLATE_COLOR_SCHEMES.creative,
    category: "business",
  },
  {
    name: "Business Security",
    icon: Shield,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "business",
  },
  {
    name: "Global Business",
    icon: Globe2,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "business",
  },
  {
    name: "Corporate Group",
    icon: Building2,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "business",
  },
];