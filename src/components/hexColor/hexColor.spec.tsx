import React from 'react';
import { render } from '@testing-library/react'
import HexColor from './hexColor';

describe('<HexColor/>', () => {
  const mockProps = {
    color: "#ff0000"
  }
  const { container, getByText, rerender } = render(<HexColor {...mockProps} />);

  test('should contains text with prop change', () => {
    const mockProps_2  = {
      color: "#000000"
    };

    getByText(mockProps.color);
    rerender(<HexColor {...mockProps_2} />);
    getByText(mockProps_2.color);
  })

  test('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
