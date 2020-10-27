import { ChangeEvent } from 'React';
import { SubmitColorChange } from '../../pages/types';

export interface IProps {
  submit: SubmitColorChange;
  hex: string;
}

export type HandleColorChange = (
  color: string,
  event: ChangeEvent<HTMLInputElement>
) => void;
