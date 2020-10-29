import React from 'react';
import { render } from '@testing-library/react'
import ColorPicker from './colorPicker';

describe('<ColorPicker/>', () => {
  const { container } = render(<ColorPicker/>);
  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
