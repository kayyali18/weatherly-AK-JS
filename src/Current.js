import React, { Component} from 'react'

const getWeather = require ('./weather-api.js')

export default class Current extends Component{
  constructor() {
    super();
    this.state 
  }

  render() {
    return (
      <div className='current-weather'>
    {/* Display current Location */}
    {/* <h1>{this.props.data.current_observation.location.full}</h1> */}
    <h2>Denver</h2>
    {/* Display Current Day */}
    <h3>Tuesday</h3>
    {/* Pull Temp for current location */}
    <p className="curr-temp">80</p>
    {/* Pull Hi-Lo for Current location */}
    <p className="hi-lo">60-75</p>
    {/* Decide Summary, or Pull summary if given */}
    <p className="day-summary">Sunny for most of the day with no chnce of rain</p>
    </div>
    )
  }
}



