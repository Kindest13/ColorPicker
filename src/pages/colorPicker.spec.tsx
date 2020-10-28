import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './colorPicker';

describe('<ColorPicker/> with no props', () => {
  const container = shallow(<ColorPicker />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
