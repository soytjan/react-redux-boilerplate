import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SearchWelcome.css';

SearchWelcome.propTypes = {

};

class SearchWelcome extends Component {
  render() {
    return (
      <nav className='SearchWelcome'>
        I'm a SearchWelcome!
      </nav>
    )
  }
}

export default SearchWelcome;