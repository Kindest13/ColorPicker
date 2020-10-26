import React, { FC } from 'react';
import IProps from '../colorBox/types';
import styled from 'styled-components';

const Input = styled.input`
 width: auto;
`

const HexColor: FC<IProps> = ({hex}) => (
  <Input type="text" name="text-color" value={hex} onChange={() => {return;}} />
);

export default HexColor;
