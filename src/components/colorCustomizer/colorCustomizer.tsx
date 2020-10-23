import React, { useState, useRef, useEffect } from 'react';
import ColorLine from './colorLine/colorLine';
import ColorBox from '../colorBox/colorBox';
import { colorsData, config } from '../../constants';
import Button from '../button/button';
import useOnClickOutside from 'use-onclickoutside';
import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';
import styled from 'styled-components';

const { rgba } = config;

const ColorCustomizer = styled.div`
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

export default ({ submit, hex }) => {
  const [color, setColor] = useState(hex);
  const [RGBColors, setRGBColors] = useState(rgba);
  const [open, setOpen] = useState(false);
  const customizer = useRef(null);
  
  useEffect(() => {
    setRGBColors(hexToRgb(hex));
    setColor(hex);
  }, [hex]);
  
  const toggle = () => setOpen(!open);
  
  const handleColorChange = (color, event) => {
    const value = Number(event.target.value);
    const updatedColors = { ...RGBColors, [color]: value };
    setRGBColors(updatedColors);
    setColor(`#${rgbToHex(...Object.values(updatedColors))}`);
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
    <Button toggle={toggle}>
      <ColorBox hex={color} />
    </Button>
      {
        open && (
          <ColorCustomizer>
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
          </ColorCustomizer>
        )
      }
    </div>
  )
}
