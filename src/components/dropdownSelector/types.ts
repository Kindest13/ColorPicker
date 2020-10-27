import { MouseEvent } from 'React';
import { HandleColorSetter } from '../../pages/types';

export interface IProps {
  onColorChange: HandleColorSetter;
}

export type ChangeColorHandler = (event: MouseEvent<HTMLUListElement>) => void;
