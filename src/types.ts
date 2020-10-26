export interface IRgbColor {
  red: number,
  green: number,
  blue: number,
  alpha?: number
}

export interface IColorData {
  label: string,
  color: string
}

export interface IConfig {
  squareSize: number,
  barSize: number,
  delay: number,
  offsetLeft: number,
  rgb: IRgbColor
}

export interface IPreset {
  label: string,
  value: string
}
