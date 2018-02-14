import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Events.css';

// Events.propTypes = {

// };

class Events extends Component {
  render() {
    return (
      <nav className='Categories'>
        I'm the Events!
        { this.props.info }
      </nav>
    )
  }
}

export default Events;