import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavTime.css';

NavTime.propTypes = {

};

class NavTime extends Component {
  render() {
    return (
      <nav className='NavTime'>
        I'm a NavTime!
      </nav>
    )
  }
}

export default NavTime;