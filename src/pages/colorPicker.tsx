import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/header';
import TextColor from '../components/textColor/textColor';
import ColorCustomizer from '../components/colorCustomizer/colorCustomizer';
import DropdownSelector from '../components/dropdownSelector/dropdownSelector';
import rgbToHex from 'rgb-hex';

const Picker = styled.div`
  display: flex;
  position: relative;
`

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const getHexColor = rgbColor => `#${rgbToHex(...Object.values(rgbColor))}`;

  const submitColorChange = rgbColor => {
    const hex = getHexColor(rgbColor);
    setColor(hex);
  }

  
  const handleColorSetter = (event) => {
    let color = event.target.getAttribute("value");
    
    if(!color) {
      const parent = event.target.parentNode;
      color = parent.getAttribute("value");
    }
    setColor(color);
  }

  return (
    <div>
      <Header />
      <Picker>
        <TextColor hex={color} />
        <ColorCustomizer
          submit={submitColorChange}
          hex={color} />
        <DropdownSelector onColorChange={handleColorSetter} />
      </Picker>
    </div>
  );
}

export default ColorPicker;
