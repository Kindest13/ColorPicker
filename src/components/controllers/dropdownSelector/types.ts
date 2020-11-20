import { MouseEvent } from 'React';
import { OnChangeColor } from '../types';

export interface IProps {
  onChangeColor: OnChangeColor;
}

export type ChangeColorHandler = (event: MouseEvent<HTMLLIElement>) => void;
