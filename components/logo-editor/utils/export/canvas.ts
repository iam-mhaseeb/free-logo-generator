export async function createExportCanvas(
  element: HTMLElement,
  width: number,
  height: number,
  scale: number = 4
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // Set high-quality rendering options
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Convert SVG to image for better quality
  if (element.querySelector('svg')) {
    const svgData = new XMLSerializer().serializeToString(element.querySelector('svg')!);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
  }

  return canvas;
}