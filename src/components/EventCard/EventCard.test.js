import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';

describe('EventCard', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<EventCard />);

    expect(renderedComponent).toMatchSnapshot();
  })
})