import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5em 0.75em;
  width: 100%;
  height: 100%;
`

export default ({children, toggle}) => <Button onClick={toggle}>{children}</Button>;
