import React, { FC } from 'react';
import IProps from '../colorBox/types';
import styled from 'styled-components';

const Text = styled.div`
  padding: 10px;
  flex-grow: 3;
`

const HexColor: FC<IProps> = ({hex}) => (
  <Text>{hex}</Text>
);

export default HexColor;
