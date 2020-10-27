import { HandleColorChange } from '../types';

export default interface IProps {
  color: string;
  label: string;
  handleColorChange: HandleColorChange;
  value: number;
}
