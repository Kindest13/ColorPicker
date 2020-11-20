import React, { FC } from 'react';
import IProps from './types';
import styled from 'styled-components';

const Toggler = styled.button`
  padding: 0.5rem 0.8rem;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`

const toggler: FC<IProps> = ({ onToggle, children }) => (
  <Toggler
    role="button-toggler"
    onClick={onToggle}>{children}</Toggler>
);

export default toggler;
