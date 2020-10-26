import React, { FC } from 'react';
import IProps from './types';
import styled from 'styled-components';

const Box = styled.div.attrs(p => ({
  style: {
    backgroundColor: p.color
  }
}))`
  width: 13px;
  height: 13px;
`

const ColorBox: FC<IProps> = ({ hex }) => <Box color={hex} />;

 export default ColorBox;
