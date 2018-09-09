import React, { Component} from 'react'

export default class Hourly extends Component{
  constructor() {
    super();
  }


  render() {
    return (
        <div className='hourly-weather'>
        {/* Display Current Day */}
        <h3> 1:00 pm </h3>
        {/* Pull Temp for current location */}
        <p className="curr-temp">32</p>
        {/* Icons */}

        {/* Pull Hi-Lo for Current location */}
        <p className="hi-lo">Hi - Lo </p>
        </div>
    )
  }
}