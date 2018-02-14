import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Header />);

    expect(renderedComponent).toMatchSnapshot();
  })
})