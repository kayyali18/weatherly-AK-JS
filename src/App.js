import React, { Component } from 'react';
import './App.css';

import Input from './Input';
import Current from './Current';
import Hourly from './Hourly';
import Header from './Header';
import TenDay from './TenDay';

const getWeather = require ('./weather-api').getWeather


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: JSON.parse(localStorage.getItem('city')) || 'Denver',
      state: JSON.parse(localStorage.getItem('state')) || 'CO',
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

  resetLocation = (inputData) => {
    if (!inputData.city || !inputData.state) return this.setState({data: null})

    getWeather (inputData.city, inputData.state)
    .then ((data => {
      if (data.response.error) return this.setState({data: null}) 

      this.setState ({
        city: inputData.city,
        state: inputData.state,
        data: data,
        saved: this.save(inputData)
        })
      })
    )
  }

  save = (data) => {
    if (data.saved) {
      localStorage.setItem('city', JSON.stringify(data.city))
      localStorage.setItem('state', JSON.stringify(data.state))
    }
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
    if (!this.state.data) return (
    <div className="App">
      <header className='landing'>
          <Header />
          <Input resetLocation={this.resetLocation}/>
      </header>
      <h1 className="error-msg">ERROR: Please enter a valid location</h1>
    </div>
    )
    return (
      <div className="App">
        <header className='landing'>
          <Header />
          <Input resetLocation={this.resetLocation}/>
        </header>
        <section className="weather-box">
          <Current data={this.state.data} />
          <article className='card-holder'>

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
          <TenDay data={this.state.data} show={this.state.showDaily} /> 
          <Hourly data={this.state.data} show={this.state.showHour} />
          </article>
        </section>
      </div>
    );
  }
}

export default App;

// fetch the API data needed //
// Pass the data fetched in as props //
// Grab every other period for multi- cast
