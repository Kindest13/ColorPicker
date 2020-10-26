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
`

const Toggler = styled.button`
  padding: 0.5em 0.75em;
  width: 100%;
  height: 100%;
`

const ColorCustomizer : FC<IProps> =  ({ submit, hex }) => {
  const [color, setColor] = useState<string>(hex);
  const [RGBColors, setRGBColors] = useState<IRgbColor>(rgb);
  const [open, setOpen] = useState<boolean>(false);
  const customizer = useRef(null);
  
  useEffect(() => {
    setRGBColors(hexToRgb(hex));
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
    setRGBColors(hexToRgb(hex));
    setColor(hex);
    setOpen(false);
  }

  const handleSubmit = () => {
    toggle();
    submit(RGBColors);
  }
  
  useOnClickOutside(customizer, handleCancel);

  return (
    <div ref={customizer}>
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
              <button onClick={handleSubmit}>Ok</button>
            </Buttons>
          </Customizer>
        )
      }
    </div>
  )
}

export default ColorCustomizer;
