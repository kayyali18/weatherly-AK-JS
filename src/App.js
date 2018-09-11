import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './Weather';
import Input from './Input';
import { get } from 'http';
import Current from './Current';
import Hourly from './Hourly';
import Header from './Header';
import TenDay from './CardWrapper';

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

  resetLocation = (data) => {
    this.setState ({
      city: data.city,
      state: data.state
    })
  }

  render() {
    return (
      <div className="App">
        <div className='main-holder'>
          <Header />
          <Input resetLocation={this.resetLocation}/>
          <Current state={this.state.state} city={this.state.city} />
        </div>
        <div className='card-holder'>
          <TenDay state={this.state.state} city={this.state.city} />
          {/*<Hourly state={this.state.state} city={this.state.city} />*/}
        </div>
      </div>
    );
  }
}

export default App;

// fetch the API data needed //
// Pass the data fetched in as props //
// Grab every other period for multi- cast
