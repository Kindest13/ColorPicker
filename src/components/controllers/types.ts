import { SubmitColorChange } from '../../pages/types';
import { HandleColorSetter } from '../../pages/types';

export default interface IProps {
  submit: SubmitColorChange;
  hex: string;
  onColorChange: HandleColorSetter;
}
