import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavCategories.css';

NavCategories.propTypes = {

};

class NavCategories extends Component {
  render() {
    return (
      <nav className='NavCategories'>
        I'm a NavCategories!
        <NavLink to='/music'>
          Music
        </NavLink>
        <NavLink to='/food'>
          Food
        </NavLink>
        <NavLink to='/culture'>
          Culture
        </NavLink>
        <NavLink to='/nightlife'>
          Nightlife
        </NavLink>
      </nav>
    )
  }
}

export default NavCategories;