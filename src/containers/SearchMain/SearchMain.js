import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SearchMain.css';

SearchMain.propTypes = {

};

class SearchMain extends Component {
  render() {
    return (
      <nav className='SearchMain'>
        I'm a SearchMain!
      </nav>
    )
  }
}

export default SearchMain;