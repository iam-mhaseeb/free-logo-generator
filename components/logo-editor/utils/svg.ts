import { IconType } from "../types";
import ReactDOMServer from "react-dom/server";
import { validateIcon } from "./icon";

export function renderSvgIcon(
  Icon: IconType | null,
  size: number,
  color: string,
  opacity: number,
  rotation: number
): string {
  if (!validateIcon(Icon)) {
    throw new Error('Invalid icon component');
  }

  try {
    // Create the icon element with proper props
    const iconElement = Icon({
      size,
      color,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        opacity,
        transform: `rotate(${rotation}deg)`,
      },
    });

    // Render to string with error handling
    const svgString = ReactDOMServer.renderToString(iconElement);
    if (!svgString) {
      throw new Error('SVG rendering failed');
    }

    // Parse and validate SVG
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'text/html');
    const svg = doc.querySelector('svg');
    
    if (!svg) {
      throw new Error('Invalid SVG structure');
    }

    return svgString;
  } catch (error) {
    console.error('SVG rendering error:', error);
    throw error;
  }
}