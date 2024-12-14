"use client";

import html2canvas from "html2canvas";
import { LogoState } from "../types";
import { renderIcon } from "./icon-renderer";
import ReactDOM from "react-dom/client";

export async function exportLogo(width: number, height: number, state: LogoState) {
  try {
    // Create temporary container
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "-9999px";
    container.style.top = "-9999px";
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    document.body.appendChild(container);

    // Create logo wrapper
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.background = state.backgroundColor;
    wrapper.style.padding = `${state.padding}px`;

    // Fix boxShadow settings
    wrapper.style.boxShadow = `${state.shadowOffset}px ${state.shadowOffset}px ${state.shadowBlur}px ${state.shadowColor}`;
    container.appendChild(wrapper);

    // Add icon if selected
    if (state.selectedIcon) {
      const iconContainer = document.createElement("div");
      const root = ReactDOM.createRoot(iconContainer);

      root.render(
        renderIcon(state.selectedIcon, {
          size: state.iconSize,
          color: state.iconColor,
          opacity: state.iconOpacity,
          rotation: state.iconRotation,
        })
      );

      wrapper.appendChild(iconContainer);

      // Wait for React to render
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Generate image
    const canvas = await html2canvas(wrapper, {
      width,
      height,
      scale: 4, // Higher scale for better quality
      backgroundColor: null,
      logging: false,
      allowTaint: true,
      useCORS: true,
    });

    // Download image
    const link = document.createElement("a");
    link.download = "logo.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup
    document.body.removeChild(container);
  } catch (error) {
    console.error("Export failed:", error);
    throw error;
  }
}
