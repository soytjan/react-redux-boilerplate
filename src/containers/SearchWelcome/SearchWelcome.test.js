import React from 'react';
import { shallow } from 'enzyme';
import SearchWelcome from './SearchWelcome';

describe('SearchWelcome', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<SearchWelcome />);

    expect(renderedComponent).toMatchSnapshot();
  })
})