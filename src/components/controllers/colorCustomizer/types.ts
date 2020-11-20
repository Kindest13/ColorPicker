import { ChangeEvent } from 'React';
import { OnChangeColor } from '../types';
import { RgbColor } from '../../../types';

export interface IProps {
  hexColor: string;
  onChangeColor: OnChangeColor;
}

export type GetHexColor = (rgbColor: RgbColor) => string;

export type HandleColorChange = (
  color: string,
  event: ChangeEvent<HTMLInputElement>
) => void;
