import { ChangeEvent } from 'React';
import { SubmitColorChange } from '../../pages/types';

export interface IProps {
  submit: SubmitColorChange,
  hex: string
}


export type HandleColorChange = (Color: string, event: ChangeEvent<HTMLInputElement>) => void;
