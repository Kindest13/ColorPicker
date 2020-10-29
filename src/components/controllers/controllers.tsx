import React, { FC } from 'react'
import ColorCustomizer from '../colorCustomizer/colorCustomizer';
import DropdownSelector from '../dropdownSelector/dropdownSelector';
import IProps from './types';
import styled from 'styled-components';

const Controllers = styled.div`
  display: flex;
`

const controllers: FC<IProps> = ({ submit, hex, onColorChange }) => (
  <Controllers>
    <ColorCustomizer
      submit={submit}
      hex={hex} />
    <DropdownSelector onColorChange={onColorChange} />
  </Controllers>
);

export default controllers;
