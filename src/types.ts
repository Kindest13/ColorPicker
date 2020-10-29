export interface IRgbColor {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
  [key: string]: number;
}

export interface IColorData {
  label: string;
  color: string;
}

export interface IPreset {
  label: string;
  value: string;
}
