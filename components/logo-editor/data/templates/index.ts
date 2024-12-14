import { Template } from "../../types";
import { businessTemplates } from "./business";
import { technologyTemplates } from "./technology";
import { creativeTemplates } from "./creative";
import { foodTemplates } from "./food";
import { healthTemplates } from "./health";
import { educationTemplates } from "./education";
import { fashionTemplates } from "./fashion";
import { sportsTemplates } from "./sports";
import { natureTemplates } from "./nature";
import { entertainmentTemplates } from "./entertainment";

// Combine all templates into a single array
export const TEMPLATES: Template[] = [
  ...businessTemplates,
  ...technologyTemplates,
  ...creativeTemplates,
  ...foodTemplates,
  ...healthTemplates,
  ...educationTemplates,
  ...fashionTemplates,
  ...sportsTemplates,
  ...natureTemplates,
  ...entertainmentTemplates,
];

export * from "./colors";