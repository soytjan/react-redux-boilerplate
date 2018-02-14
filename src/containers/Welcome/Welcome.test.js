import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Welcome />);

    expect(renderedComponent).toMatchSnapshot();
  })
})