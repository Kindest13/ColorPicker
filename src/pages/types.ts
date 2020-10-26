import { MouseEvent } from 'React';
import { IRgbColor } from '../types';

export type GetHexColor = (rgbColor: IRgbColor) => string;

export type SubmitColorChange = (rgbColor: IRgbColor) => void;

export type HandleColorSetter = (event: MouseEvent<HTMLUListElement>) => void;

