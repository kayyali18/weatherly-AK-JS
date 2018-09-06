import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './Weather';
import TenDay from './TenDay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TenDay/>
        <Weather/>
      </div>
    );
  }
}

export default App;

// fetch the API data needed //
// Pass the data fetched in as props //
// Grab every other period for multi- cast
