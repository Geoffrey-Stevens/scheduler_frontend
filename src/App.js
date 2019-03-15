import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Schedule from './views/schedule'
import Events from './views/events'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' render={() => <Schedule />} />
          <Route exact path='/events' render={() => <Events />} />
        </Switch>
      </div>
    );
  }
}

export default App;
