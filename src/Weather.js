import React, { Component } from 'react';



class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      daily: true,
      weekly: false,
      hourly: false
    }
  }


  render() {

    return ( 
      <div className='App-intro'>
      <p className='location'> Denver, Co </p>
      <p className='day'> Tuesday, March 18th </p>
      <p className='temp'> 90 Degrees(fetch from API) </p>
      <p className='daily-range'> 60 - 90 (fetch from API)</p>
      </div>
      )
  }


}


export default Weather;

