import { IColorData, IConfig, IPreset } from './types';

export const colorsData: IColorData[] = [
  {
    label: 'R',
    color: 'red'
  },
  {
    label: 'G',
    color: 'green'
  },
  {
    label: 'B',
    color: 'blue'
  },
];

export const config: IConfig = {
  squareSize: 255,
  barSize: 10,
  delay: 150,
  offsetLeft: 175.5,
  rgb: { red: 0, green: 0, blue: 0 }
};

export const presets: IPreset[] = [
  {
    label: 'RED',
    value: '#ff0000'
  },
  {
    label: 'YELLOW',
    value: '#ffff00'
  },
  {
    label: 'BLUE',
    value: '#0000ff'
  },
];
