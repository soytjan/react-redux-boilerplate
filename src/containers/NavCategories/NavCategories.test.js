import React from 'react';
import { shallow } from 'enzyme';
import NavCategories from './NavCategories';

describe('NavCategories', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<NavCategories />);

    expect(renderedComponent).toMatchSnapshot();
  })
})