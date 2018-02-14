import React from 'react';
import { shallow } from 'enzyme';
import EventView from './EventView';

describe('EventView', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<EventView />);

    expect(renderedComponent).toMatchSnapshot();
  })
})