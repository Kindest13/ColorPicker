import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/header';
import HexColor from '../components/hexColor/hexColor';
import Controllers from '../components/controllers/controllers';
import rgbToHex from 'rgb-hex';
import { GetHexColor, SubmitColorChange, HandleColorSetter } from './types';

const Picker = styled.main`
  display: flex;
  justify-content: space-between;
  position: relative;
  border: 2px solid #EFEFEF;
  border-radius: 5px;
  width: 200px;
  background-color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #85144b;
  height: 100vh;
  width: 100vw;
`

export default function ColorPicker() {
  const [color, setColor] = useState<string>('#000000');

  const getHexColor: GetHexColor = rgbColor => `#${rgbToHex(rgbColor.red, rgbColor.green, rgbColor.blue)}`;


  const submitColorChange: SubmitColorChange = rgbColor => {
    const hex = getHexColor(rgbColor);
    setColor(hex);
  }

  
  const handleColorSetter: HandleColorSetter = (event) => {
    let list = event.target as HTMLLIElement;
    
    if(list.tagName !== "LI") {
      list = list.parentNode as HTMLLIElement;
    }
    const color = list.getAttribute("value");
    setColor(color);
  }

  return (
    <Wrapper>
      <Header />
      <Picker>
        <HexColor hex={color} />
        <Controllers
          submit={submitColorChange}
          hex={color}
          onColorChange={handleColorSetter} />
      </Picker>
    </Wrapper>
  );
}
