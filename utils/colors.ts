export const defaultColor = "#3700b3";
const colors = ["#c862e8", "#7d3Ac1", "#bc5090", "#ea7369", "#f3a533"];

function lightenDarkenColor(col: string, amt: number) {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export default lightenDarkenColor;

export const generateColors = (): string[] => {
  for (let i = 1; i < 4; i++) {
    [defaultColor, ...colors].forEach((color) => {
      const newColor = lightenDarkenColor(color, 20 * i);
      const isWhite = newColor.indexOf("ffff") > -1;

      if (!isWhite) {
        colors.push(newColor);
      }
    });
  }

  return colors;
};

export const generatedColors = generateColors();
