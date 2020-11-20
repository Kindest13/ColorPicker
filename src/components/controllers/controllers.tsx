import React, { FC } from 'react';
import ColorCustomizer from './colorCustomizer/colorCustomizer';
import DropdownSelector from './dropdownSelector/dropdownSelector';
import IProps from './types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

const Controllers: FC<IProps> = ({ color, onChangeColor }) => (
  <Wrapper>
    <ColorCustomizer
      hexColor={color}
      onChangeColor={onChangeColor} />
    <DropdownSelector onChangeColor={onChangeColor} />
  </Wrapper>
);

export default Controllers;
