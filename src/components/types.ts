export type OnChangeColor = (color: string) => void;

export default interface IProps {
  color: string;
  onChangeColor: OnChangeColor;
}
