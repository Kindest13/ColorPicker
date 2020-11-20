import React, { useState, useRef, useEffect, FC } from 'react';
import ColorLine from './colorLine/colorLine';
import ColorBox from '../colorBox/colorBox';
import Toggler from '../toggler/toggler';
import { colorsData, rgbSetup } from '../../../constants';
import { IProps, HandleColorChange, GetHexColor } from './types';
import { RgbColor } from '../../../types';
import useOnClickOutside from 'use-onclickoutside';
import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';
import styled from 'styled-components';

const Customizer = styled.div`
  background-color: #EFEFEF;
  padding: 20px;
  position: absolute;
  top: 130%;
  left: 0;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Cancel = styled.button`
  margin-right: 10px;
  background-color: #ab0000;
  border: none;
  color: #ffffff;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #ff0000;
  }
`

const Apply = styled.button`
  background-color: #00a900;
  border: none;
  color: #ffffff;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #00f000;
  }
`

const ColorCustomizer : FC<IProps> =  ({ hexColor, onChangeColor }) => {
  const [color, setColor] = useState<string>(hexColor);
  const [RGBColors, setRGBColors] = useState<RgbColor>(rgbSetup);
  const [open, setOpen] = useState<boolean>(false);
  const customizer = useRef(null);
  
  useEffect(() => {
    setRGBColors(hexToRgb(hexColor) as RgbColor);
    setColor(hexColor);
  }, [hexColor]);
  
  const handleToggle = () => setOpen(!open);
  
  const getHexColor: GetHexColor = rgbColor => `#${rgbToHex(rgbColor.red, rgbColor.green, rgbColor.blue)}`;
  
  const handleColorChange: HandleColorChange = (color, event) => {
    const value = Number(event.target.value);
    const updatedColors = { ...RGBColors, [color]: value };
    setRGBColors(updatedColors);
    const hex = getHexColor(updatedColors);
    setColor(hex);
  };

  const handleCancel = () => {
    if(!open) return;
    setRGBColors(hexToRgb(hexColor) as RgbColor);
    setColor(hexColor);
    setOpen(false);
  }

  const handleSubmit = () => {
    const hex = getHexColor(RGBColors);
    onChangeColor(hex);
    handleToggle();
  }
  
  useOnClickOutside(customizer, handleCancel);

  return (
    <div ref={customizer}>
      <Toggler onToggle={handleToggle}>
        <ColorBox color={color} />
      </Toggler>
      {
        open && (
          <Customizer>
            {
              colorsData.map(({ label, color }) => (
                <ColorLine
                  key={label}
                  value={RGBColors[color]}
                  label={label}
                  color={color}
                  handleColorChange={handleColorChange} />
              ))
            }
            <Buttons>
              <Cancel onClick={handleCancel}>Cancel</Cancel>
              <Apply onClick={handleSubmit}>Ok</Apply>
            </Buttons>
          </Customizer>
        )
      }
    </div>
  )
}

export default ColorCustomizer;
