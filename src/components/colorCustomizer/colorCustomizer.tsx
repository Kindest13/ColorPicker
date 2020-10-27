import React, { useState, useRef, useEffect, FC } from 'react';
import ColorLine from './colorLine/colorLine';
import ColorBox from '../colorBox/colorBox';
import { colorsData, config } from '../../constants';
import { IProps, HandleColorChange } from './types';
import { IRgbColor } from '../../types';
import useOnClickOutside from 'use-onclickoutside';
import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';
import styled from 'styled-components';

const { rgb } = config;

const Wrapper = styled.div`
  flex-grow: 1;
`

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

const Toggler = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`

const ColorCustomizer : FC<IProps> =  ({ submit, hex }) => {
  const [color, setColor] = useState<string>(hex);
  const [RGBColors, setRGBColors] = useState<IRgbColor>(rgb);
  const [open, setOpen] = useState<boolean>(false);
  const customizer = useRef(null);
  
  useEffect(() => {
    setRGBColors(hexToRgb(hex) as IRgbColor);
    setColor(hex);
  }, [hex]);
  
  const toggle = () => setOpen(!open);
  
  const handleColorChange: HandleColorChange = (color, event) => {
    const value = Number(event.target.value);
    const updatedColors = { ...RGBColors, [color]: value };
    setRGBColors(updatedColors);
    setColor(`#${rgbToHex(updatedColors.red, updatedColors.green, updatedColors.blue)}`);
  };

  const handleCancel = () => {
    if(!open) return;
    setRGBColors(hexToRgb(hex) as IRgbColor);
    setColor(hex);
    setOpen(false);
  }

  const handleSubmit = () => {
    toggle();
    submit(RGBColors);
  }
  
  useOnClickOutside(customizer, handleCancel);

  return (
    <Wrapper ref={customizer}>
      <Toggler onClick={toggle}>
        <ColorBox hex={color} />
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
    </Wrapper>
  )
}

export default ColorCustomizer;
