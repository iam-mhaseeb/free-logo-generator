import { IconType } from "../../types";
import { validateIcon } from "../icon";
import { renderSvgIcon } from "../svg";

export async function renderExportIcon(
  Icon: IconType | null,
  size: number,
  color: string,
  opacity: number,
  rotation: number
): Promise<SVGElement | null> {
  if (!validateIcon(Icon)) {
    return null;
  }

  try {
    const svgString = renderSvgIcon(Icon, size, color, opacity, rotation);
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'text/html');
    const svg = doc.querySelector('svg');

    if (!svg) {
      throw new Error('SVG element not found after parsing');
    }

    // Set explicit dimensions
    svg.setAttribute('width', `${size}px`);
    svg.setAttribute('height', `${size}px`);
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

    return svg as SVGElement;
  } catch (error) {
    console.error('Icon export rendering failed:', error);
    return null;
  }
}