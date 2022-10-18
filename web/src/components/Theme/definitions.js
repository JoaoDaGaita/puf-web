const baseColors = {
  black: '#000000',
  red: '#FF647C',
  green: '#0BD9B3',
  blue: '#487FD9',
  yeallow: '#EBC455',
}
const brandColors = {
  raisinBlack: '#16171C',
  caribbeanGreen: baseColors.celeste,
}

const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [10, 12, 14, 16, 18, 20]
const spaces = [4, 8, 12, 16, 20, 24, 28, 30, 64, 128]

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
