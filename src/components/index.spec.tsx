import React from 'react';
import { render } from '@testing-library/react'
import ColorPicker from './';

describe('<ColorPicker/>', () => {
  const hexColor = "#ffffff";
  const mockProps = { color: hexColor, onChangeColor: jest.fn };
  const { container } = render(<ColorPicker {...mockProps} />);
  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
