import React, { FC } from 'react';
import IProps from './types';
import styled from 'styled-components';

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  appearance: none;
  outline: none;
  border-radius: 5px;
  &::-webkit-slider-thumb {
    appearance: none;
    cursor: pointer;
    height: 10px;
    width: 10px;
    border-radius: 25%;
    background-color: #f5f5f5;
  }
`

const ColorLabel = styled.span.attrs(p => ({
  style: {
    color: p.color
  }
}))`
  width: 15px;  
  font-size: 1.3rem;
  margin-right: 5px;
`

const ColorLine: FC<IProps> = ({ color, label, handleColorChange, value }) => (
  <LineWrapper>
    <ColorLabel color={color}>{label}</ColorLabel>
    <Input
      onChange={(event) => handleColorChange(color, event)}
      value={value}
      min={0}
      max={255}
      type="range"
      style={{ background: `linear-gradient(to right, #000, ${color})` }} />
  </LineWrapper>
);

export default ColorLine;
