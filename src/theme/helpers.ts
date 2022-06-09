const hexToRgba = (hex: string, opacity: number = 1): string => {
  const bigInt = parseInt(hex.substring(1), 16);

  const red = (bigInt >> 16) & 255;
  const green = (bigInt >> 8) & 255;
  const blue = bigInt & 255;
  const alpha = opacity >= 0 && opacity <= 1 ? opacity : 1;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export default { hexToRgba };
