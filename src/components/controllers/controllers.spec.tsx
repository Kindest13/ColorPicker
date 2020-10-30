import React from 'react';
import { render } from '@testing-library/react'
import Controllers from './controllers';

describe('<Controllers/>', () => {
  const mockProps = {
    submit: () => {return;},
    hex: '#ffffff',
    onColorChange: () => {return;}
  }
  const { container } = render(<Controllers {...mockProps} />);
  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
