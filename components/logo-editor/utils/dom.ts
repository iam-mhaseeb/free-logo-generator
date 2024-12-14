export function createExportContainer(width: number, height: number): HTMLDivElement {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.backgroundColor = "transparent";
  return container;
}

export function createLogoWrapper(
  width: number,
  backgroundColor: string,
  padding: number,
  shadowOffset: number,
  shadowBlur: number,
  shadowColor: string
): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.className = "logo-wrapper";
  wrapper.style.width = `${width}px`;
  wrapper.style.height = `${width}px`;
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.backgroundColor = backgroundColor.startsWith('linear-gradient') ? 'transparent' : backgroundColor;
  wrapper.style.backgroundImage = backgroundColor.startsWith('linear-gradient') ? backgroundColor : 'none';
  wrapper.style.padding = `${padding}px`;
  wrapper.style.boxShadow = `${shadowOffset}px ${shadowOffset}px ${shadowBlur}px ${shadowColor}`;
  wrapper.style.borderRadius = `${Math.round(width * 0.02)}px`;
  wrapper.style.position = "relative";
  wrapper.style.overflow = "hidden";
  return wrapper;
}

export function calculateIconSize(
  containerWidth: number,
  containerHeight: number,
  padding: number,
  baseIconSize: number
): number {
  const availableSpace = Math.min(containerWidth, containerHeight) - (padding * 2);
  return Math.min(availableSpace * 0.8, baseIconSize); // Reduced to 80% to prevent edge clipping
}

export function downloadImage(dataUrl: string): void {
  const link = document.createElement('a');
  link.download = 'logo.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}