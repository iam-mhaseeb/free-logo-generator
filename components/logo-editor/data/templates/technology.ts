import { Template } from "../../types";
import { 
  Cpu, Database, Cloud, Code, Server, Wifi, Laptop, SmartphoneNfc,
  Binary, BrainCircuit, Microwave, Radio, Router, Satellite,
  SatelliteDish, Signal, Smartphone, Tablet, Tv, Bot, Cog,
  Fingerprint, QrCode, Share2, Shield, Terminal, Zap,
  CircuitBoard
} from "lucide-react";
import { TEMPLATE_COLOR_SCHEMES } from "./colors";

export const technologyTemplates: Template[] = [
  {
    name: "Tech Hardware",
    icon: Cpu,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
  {
    name: "Cloud Services",
    icon: Cloud,
    colors: TEMPLATE_COLOR_SCHEMES.modern,
    category: "technology",
  },
  {
    name: "Software Development",
    icon: Code,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "technology",
  },
  {
    name: "Server Solutions",
    icon: Server,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "technology",
  },
  {
    name: "Network Services",
    icon: Wifi,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "technology",
  },
  {
    name: "AI Technology",
    icon: BrainCircuit,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "technology",
  },
  {
    name: "Digital Security",
    icon: Shield,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "technology",
  },
  {
    name: "IoT Solutions",
    icon: CircuitBoard,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
  {
    name: "Data Analytics",
    icon: Binary,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "technology",
  },
  {
    name: "DevOps",
    icon: Terminal,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "technology",
  },
  {
    name: "Automation",
    icon: Cog,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
  {
    name: "Digital Identity",
    icon: Fingerprint,
    colors: TEMPLATE_COLOR_SCHEMES.elegant,
    category: "technology",
  },
  {
    name: "QR Solutions",
    icon: QrCode,
    colors: TEMPLATE_COLOR_SCHEMES.minimal,
    category: "technology",
  },
  {
    name: "Tech Innovation",
    icon: Zap,
    colors: TEMPLATE_COLOR_SCHEMES.warm,
    category: "technology",
  },
  {
    name: "Digital Assistant",
    icon: Bot,
    colors: TEMPLATE_COLOR_SCHEMES.vibrant,
    category: "technology",
  },
  {
    name: "Tech Integration",
    icon: Share2,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
  {
    name: "Smart Devices",
    icon: CircuitBoard,
    colors: TEMPLATE_COLOR_SCHEMES.gradient,
    category: "technology",
  },
  {
    name: "Digital Broadcasting",
    icon: Radio,
    colors: TEMPLATE_COLOR_SCHEMES.dark,
    category: "technology",
  },
  {
    name: "Satellite Tech",
    icon: Satellite,
    colors: TEMPLATE_COLOR_SCHEMES.tech,
    category: "technology",
  },
];