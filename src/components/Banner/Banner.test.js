import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe('Banner', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Banner />);

    expect(renderedComponent).toMatchSnapshot();
  })
})