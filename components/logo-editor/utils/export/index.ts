import { LogoState } from "../../types";
import { createCanvas, resizeCanvas } from "./canvas";
import { createContainer, createWrapper } from "./container";
import { createIconContainer } from "./icon";
import { downloadImage } from "./download";

export async function exportLogo(width: number, height: number, state: LogoState) {
  try {
    // Create temporary container with extra padding for shadow
    const shadowPadding = Math.max(state.shadowOffset + state.shadowBlur, 20);
    const containerSize = Math.max(width, height) + (shadowPadding * 2);
    
    const container = createContainer(containerSize, containerSize);
    document.body.appendChild(container);

    // Calculate scale factor for better quality
    const scaleFactor = 4;
    const scaledSize = Math.max(width, height) * scaleFactor;
    const scaledPadding = shadowPadding * scaleFactor;

    // Create logo wrapper with scaled dimensions
    const wrapper = createWrapper(
      scaledSize,
      state.backgroundColor,
      state.padding * scaleFactor,
      state.shadowOffset * scaleFactor,
      state.shadowBlur * scaleFactor,
      state.shadowColor,
      scaledPadding
    );
    container.appendChild(wrapper);

    // Add icon if selected
    if (state.selectedIcon) {
      // Calculate icon size based on container dimensions
      const maxIconSize = scaledSize - (state.padding * scaleFactor * 2);
      const iconSize = Math.min(maxIconSize, state.iconSize * scaleFactor);
      
      const iconContainer = createIconContainer(
        state.selectedIcon,
        iconSize,
        state.iconColor,
        state.iconOpacity,
        state.iconRotation
      );
      wrapper.appendChild(iconContainer);

      // Ensure icon is centered
      iconContainer.style.position = "absolute";
      iconContainer.style.top = "50%";
      iconContainer.style.left = "50%";
      iconContainer.style.transform = `translate(-50%, -50%) rotate(${state.iconRotation}deg)`;
    }

    // Wait for any potential icon rendering
    await new Promise(resolve => setTimeout(resolve, 200));

    // Generate high-quality image
    const canvas = await createCanvas(wrapper, {
      width: scaledSize + (scaledPadding * 2),
      height: scaledSize + (scaledPadding * 2),
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
    });

    // Crop and scale down to requested size
    const outputCanvas = resizeCanvas(
      canvas,
      width,
      height,
      scaledPadding,
      scaledSize
    );

    // Download image
    downloadImage(outputCanvas.toDataURL('image/png'));

    // Cleanup
    document.body.removeChild(container);
  } catch (error) {
    console.error("Export failed:", error);
    throw error;
  }
}