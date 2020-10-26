import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/header';
import HexColor from '../components/hexColor/hexColor';
import ColorCustomizer from '../components/colorCustomizer/colorCustomizer';
import DropdownSelector from '../components/dropdownSelector/dropdownSelector';
import rgbToHex from 'rgb-hex';
import { GetHexColor, SubmitColorChange, HandleColorSetter } from './types';

const Picker = styled.div`
  display: flex;
  position: relative;
`

const ColorPicker = () => {
  const [color, setColor] = useState<string>('#000000');

  const getHexColor: GetHexColor = rgbColor => `#${rgbToHex(rgbColor.red, rgbColor.green, rgbColor.blue)}`;


  const submitColorChange: SubmitColorChange = rgbColor => {
    const hex = getHexColor(rgbColor);
    setColor(hex);
  }

  
  const handleColorSetter: HandleColorSetter = (event) => {
    let color = event.target.getAttribute("value");
    
    if(!color) {
      const list = event.target.parentNode as HTMLUListElement;
      color = list.getAttribute("value");
    }
    setColor(color);
  }

  return (
    <div>
      <Header />
      <Picker>
        <HexColor hex={color} />
        <ColorCustomizer
          submit={submitColorChange}
          hex={color} />
        <DropdownSelector onColorChange={handleColorSetter} />
      </Picker>
    </div>
  );
}

export default ColorPicker;
