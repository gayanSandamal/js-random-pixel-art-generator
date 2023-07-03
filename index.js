// Generate symmetrical random pixel art with two colors
function generateSymmetricalPixelArt(width = 16, height = 16, pixelSize = 8, baseColor = "#911a13", secondaryColor = "#f69cd7") {
  const canvas = document.createElement("canvas");
  canvas.width = width * pixelSize;
  canvas.height = height * pixelSize;
  const ctx = canvas.getContext("2d");

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {
      const color = Math.random() < 0.5 ? baseColor : secondaryColor;
      ctx.fillStyle = color;
      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      ctx.fillRect((width - x - 1) * pixelSize, y * pixelSize, pixelSize, pixelSize); // Mirror the pixel horizontally
    }
  }

  return canvas.toDataURL(); // Get the base64 representation of the image
}

export const generatePixelArt = (settings) => {
  const pixelArtImage = generateSymmetricalPixelArt(settings.width, settings.height, settings.pixelSize, settings.baseColor, settings.secondaryColor);
  const img = document.getElementById(settings.imageId ?? "pixelArt");
  img.src = pixelArtImage;
}