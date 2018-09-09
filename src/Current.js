import React, { Component} from 'react'

const getWeather = require ('./weather-api.js')

export default class Current extends Component{
  constructor() {
    super();
    this.state 
  }

  render() {
    return (
      <div className='current-weather current-component'>
    {/* Display current Location */}
    {/* <h1>{this.props.data.current_observation.location.full}</h1> */}
    <h2 className='current-location current-component'>Denver</h2>
    {/* Display Current Day */}
    <h3 classname='current-day current-component'>Tuesday</h3>
    {/* Pull Temp for current location */}
    <p className="curr-temp current-component">Temperature: 80</p>
    {/* Pull Hi-Lo for Current location */}
    <p className="hi-lo current-component">Hi-Lo: 60-75</p>
    {/* Decide Summary, or Pull summary if given */}
    <p className="day-summary current-component">Sunny for most of the day with no chnce of rain</p>
    </div>
    )
  }
}



