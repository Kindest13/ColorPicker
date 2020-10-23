import React from 'react';
import styled from 'styled-components';

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  appearance: none;
  outline: none;
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

export default ({ color, label, handleColorChange, value }) => {
  return (
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
  }