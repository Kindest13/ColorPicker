import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import DropdownSelector from './dropdownSelector';

describe('<DropdownSelector/>', () => {
  const mockProps = {
    onColorChange: () => {return;}
  }
  
  test('should open dropdown list by clicking on toggler', () => {
    const { getByRole } = render(<DropdownSelector {...mockProps} />);
    const toggler = getByRole('button-toggler');
    fireEvent.click(toggler);
    expect(getByRole('colors-list')).toBeInTheDocument();
    fireEvent.click(toggler);
  })
  
  test('should match the snapshot', () => {
    const { container } = render(<DropdownSelector {...mockProps} />);
    expect(container).toMatchSnapshot();
  })
})
