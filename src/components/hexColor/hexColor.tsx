import React, { FC } from 'react';
import IProps from '../controllers/colorBox/types';
import styled from 'styled-components';

const Text = styled.div`
  padding: 10px;
  width: 100%;
`

const HexColor: FC<IProps> = ({ color }) => (
  <Text>{color}</Text>
);

export default HexColor;
