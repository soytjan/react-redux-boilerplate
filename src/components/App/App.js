import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Welcome from '../../containers/Welcome/Welcome';
import Banner from '../Banner/Banner';
import Main from '../../containers/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/home' component={Main} />
        <Route exact path='/music' component={Main} />
        <Route exact path='/food' component={Main} />
        <Route exact path='/culture' component={Main} />
        <Route exact path='/nightlife' component={Main} />
      </div>
    );
  }
}

export default App;
