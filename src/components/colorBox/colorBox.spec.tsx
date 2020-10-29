import React from 'react';
import { render, cleanup } from '@testing-library/react'
import ColorBox from './colorBox';

afterEach(cleanup);

test('<ColorBox/> should change color depends on props', () => {
  const hexColor = "#ffffff";
  const mockProps = { hex: hexColor };
  const { container } = render(<ColorBox {...mockProps} />);

  expect(container.firstChild).toHaveStyle(`background-color: ${hexColor}`);
})

