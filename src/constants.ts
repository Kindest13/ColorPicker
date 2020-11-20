import { ColorData, RgbColor, Preset } from './types';

export const colorsData: ColorData[] = [
  {
    label: 'R',
    color: 'red',
  },
  {
    label: 'G',
    color: 'green',
  },
  {
    label: 'B',
    color: 'blue',
  },
];

export const rgbSetup: RgbColor = {
  red: 0,
  green: 0,
  blue: 0,
};

export const presets: Preset[] = [
  {
    label: 'RED',
    value: '#ff0000',
  },
  {
    label: 'YELLOW',
    value: '#ffff00',
  },
  {
    label: 'BLUE',
    value: '#0000ff',
  },
];
