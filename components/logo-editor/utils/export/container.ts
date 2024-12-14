export function createContainer(width: number, height: number): HTMLDivElement {
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
  container.style.overflow = "visible";
  return container;
}

export function createWrapper(
  size: number,
  backgroundColor: string,
  padding: number,
  shadowOffset: number,
  shadowBlur: number,
  shadowColor: string,
  containerPadding: number
): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.className = "logo-wrapper";
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.backgroundColor = backgroundColor.startsWith('linear-gradient') ? 'transparent' : backgroundColor;
  wrapper.style.backgroundImage = backgroundColor.startsWith('linear-gradient') ? backgroundColor : 'none';
  wrapper.style.padding = `${padding}px`;
  wrapper.style.boxShadow = `${shadowOffset}px ${shadowOffset}px ${shadowBlur}px ${shadowColor}`;
  wrapper.style.borderRadius = `${Math.round(size * 0.1)}px`;
  wrapper.style.position = "relative";
  wrapper.style.margin = `${containerPadding}px`;
  wrapper.style.boxSizing = "border-box";
  wrapper.style.transform = "scale(0.95)"; // Slightly reduce size to ensure proper border radius
  return wrapper;
}