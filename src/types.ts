export interface RgbColor {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
  [key: string]: number;
}

export interface ColorData {
  label: string;
  color: string;
}

export interface Preset {
  label: string;
  value: string;
}
