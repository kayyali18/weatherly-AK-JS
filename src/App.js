import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './Weather';
import CardWrapper from './CardWrapper';
import Input from './Input';
import { get } from 'http';
import Current from './Current';
import Hourly from './Hourly';
import Header from './Header';

const getWeather = require ('./weather-api').getWeather


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver',
      state: 'CO',
      data: {}
    }
  }

  componentDidMount() {
    getWeather(this.state.city, this.state.state)
    .then (data => {
      this.setState ({
        data
      })
    })
  }

  resetLocation = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Current />
        <CardWrapper />
      </div>
    );
  }
}

export default App;

// fetch the API data needed //
// Pass the data fetched in as props //
// Grab every other period for multi- cast
