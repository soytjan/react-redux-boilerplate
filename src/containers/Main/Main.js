import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Events from '../../components/Events/Events';
import './Main.css';

// Main.propTypes = {
//   // music: PropTypes.array,
//   // food: PropTypes.array,
//   // culture: PropTypes.array,
//   // nightlife: PropTypes.array
// };

class Main extends Component {
  render() {
    return (
      <section className="Main">
        I'm a Main!
        <Route 
          exact path='/home' 
          render={() => (<Events info='home data' />)}
        />
        <Route 
          exact path='/music' 
          render={() => (<Events info='music data' />)}
        />
        <Route 
          exact path='/food' 
          render={() => (<Events info='food data' />)}
        />
        <Route 
          exact path='/culture' 
          render={() => (<Events info='culture data' />)}
        />
        <Route 
          exact path='/nightlife' 
          render={() => (<Events info='nightlife data' />)}
        />
      </section>
    )
  }
}

export default Main;