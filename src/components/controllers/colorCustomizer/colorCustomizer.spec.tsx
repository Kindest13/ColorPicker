import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ColorCustomizer from './colorCustomizer';

describe('<ColorCustomizer/>', () => {
  const mockProps = {
    onChangeColor: jest.fn(),
    hexColor: "#000000"
  }
  
  test('customizer should be closed', () => {
    const { queryByRole } = render(<ColorCustomizer {...mockProps} />);
    expect(queryByRole('color-customizer')).toBeNull();
  })
  
  test('toggler should open/close customizer', () => {
    const { getByRole, getByText } = render(<ColorCustomizer {...mockProps} />);
    const toggler = getByRole('button-toggler');
    fireEvent.click(toggler);
    expect(getByText(/cancel/i)).toBeInTheDocument();
    fireEvent.click(toggler);
  })
  
  test('should apply color to <ColorBox />', () => {
    const { container, getByRole, getByText } = render(<ColorCustomizer {...mockProps} />);
    const toggler = getByRole('button-toggler');
    fireEvent.click(toggler);
    const greenInput = container.querySelector('[name="green"]');
    const apply = getByText(/ok/i);
    fireEvent.change(greenInput, { target: { value: 150 } });
    fireEvent.click(apply);
    expect(container.querySelector('[color="#009600"]')).toBeInTheDocument();
    fireEvent.click(toggler);
  })
  
  test('should match the snapshot', () => {
    const { container } = render(<ColorCustomizer {...mockProps} />);
    expect(container).toMatchSnapshot();
  })
})
