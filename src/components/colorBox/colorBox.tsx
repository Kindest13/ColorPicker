import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div.attrs(p => ({
  style: {
    backgroundColor: p.color
  }
}))`
  width: 13px;
  height: 13px;
`

export default ({ hex }) => <ColorBox color={hex} />;
