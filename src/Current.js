import React, { Component} from 'react'

const getWeather = require ('./weather-api.js')

export default class Current extends Component{
  constructor() {
    super();
    this.state 
  }

  render() {
    return (
      <div className='CurrentWeather'>
    {/* Display current Location */}
    {/* Display Current Day */}
    {/* Pull Temp for current location */}
    {/* Pull Hi-Lo for Current location */}
    {/* Decide Summary, or Pull summary if given */}
      </div>
    )
  }
}



