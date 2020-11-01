import React, { FC } from 'react';
import IProps from './types';
import styled from 'styled-components';

const Toggler = styled.button`
  padding: 0.5rem 0.8rem;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`

const toggler: FC<IProps> = ({ toggle, children }) => (
  <Toggler
    onClick={toggle}
    role="button-toggler">
      {children}
  </Toggler>
);

export default toggler;
