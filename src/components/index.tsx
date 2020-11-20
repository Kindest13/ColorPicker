import React, { FC } from 'react'
import styled from 'styled-components';
import Header from './header/header';
import HexColor from './hexColor/hexColor';
import Controllers from './controllers/controllers';
import IProps from './types';

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

const ColorPicker: FC<IProps> = ({ color, onChangeColor }) => (
  <Wrapper>
    <Header />
    <Picker>
      <HexColor color={color} />
      <Controllers
        color={color}
        onChangeColor={onChangeColor} />
    </Picker>
  </Wrapper>
);

export default ColorPicker;
