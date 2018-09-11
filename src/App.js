import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './Weather';
import Input from './Input';
import { get } from 'http';
import Current from './Current';
import Hourly from './Hourly';
import Header from './Header';
import TenDay from './TenDay';

const getWeather = require ('./weather-api').getWeather


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver',
      state: 'CO',
      data: {},
      showHour: 'show',
      showDaily: 'hidden',
      disabled: true
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

  toggleHourly = () => {
    let css = (this.state.showHour == 'hidden') ? 'show' : 'hidden';
    let css2 = (this.state.showDaily == 'hidden') ? 'show' : 'hidden';
    this.setState({
      showHour: css,
      showDaily: css2,
      disabled:!this.state.disabled

    })
  }

  render() {
    return (
      <div className="App">
        <header className='landing'>
          <Header />
          <Input resetLocation={this.resetLocation}/>
        </header>
        <section className="weather-box">
          <Current state={this.state.state} city={this.state.city} />
          <div className='card-holder'>

          <button className={`forecast-toggle`}
          disabled={this.state.disabled}
          onClick={event => {
            event.preventDefault();
            this.toggleHourly();
          }}> Hourly </button>
          
          <button className="forecast-toggle"
          disabled={!this.state.disabled}
          onClick={event => {
            event.preventDefault();
            this.toggleHourly();
          }}> 10 Day </button>
          <TenDay show={this.state.showDaily} state={this.state.state} city={this.state.city} /> 
          <Hourly show={this.state.showHour} state={this.state.state} city={this.state.city} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

// fetch the API data needed //
// Pass the data fetched in as props //
// Grab every other period for multi- cast
