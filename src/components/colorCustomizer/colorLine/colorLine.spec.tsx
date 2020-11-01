import React from 'react';
import { render } from '@testing-library/react'
import ColorLine from './colorLine';

describe('<ColorLine />', () => {
  const mockProps = {
    color: "blue",
    label: "B",
    handleColorChange: jest.fn(),
    value: 100
  }

  test('range input should have appropriate value', () => {
    const { container } = render(<ColorLine {...mockProps} />);
    const blueRange = container.querySelector('[name="blue"]');
    expect(blueRange).toHaveValue(mockProps.value.toString());
  })

  test('should match the snapshot', () => {
    const { container } = render(<ColorLine {...mockProps} />);
    expect(container).toMatchSnapshot();
  })
})
