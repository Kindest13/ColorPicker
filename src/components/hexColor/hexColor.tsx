import React, { FC } from 'react';
import IProps from '../colorBox/types';
import styled from 'styled-components';

const Text = styled.div`
  padding: 10px;
  width: 100%;
`

const HexColor: FC<IProps> = ({hex}) => (
  <Text>{hex}</Text>
);

export default HexColor;
