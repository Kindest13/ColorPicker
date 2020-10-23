import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
 width: auto;
`

export default ({hex}) => (
  <Input type="text" name="text-color" value={hex} onChange={() => {return;}} />
);
