import React from 'react';
import { render } from '@testing-library/react'
import Header from './header';

describe('<Header/>', () => {
  const { container } = render(<Header />);
  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  })
})
