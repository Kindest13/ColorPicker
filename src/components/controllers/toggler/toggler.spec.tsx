import React from 'react';
import { render } from '@testing-library/react'
import Toggler from './toggler';

describe('<Toggler/>', () => {
  const mockProps = {
    onToggle: jest.fn(),
    children: <div></div>,
  }
  const { container } = render(<Toggler {...mockProps} />);
  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
