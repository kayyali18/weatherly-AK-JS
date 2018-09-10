import React, { Component} from 'react'
import EachHour from './EachHour';
import { getWeather } from './weather-api';

export default class Hourly extends Component{
  constructor() {
    super();
    this.data = getWeather('Denver', 'CO')
    this.hours = [0, 1, 2, 3, 4, 5, 6];
    this.state = {
        data: null
    };
  }

  componentDidMount () {
    this.data.then (data => {
      this.setState({
        data: data
      })
    })
  }


  render() {
    if (!this.state.data) return null;
    else if (this.state.data) {
      return (
        <div className='HourlyWeather'>
        {
          this.hours.map((hour, index) => {
          return <EachHour data={this.state.data} index={index}/>
          })
        }
  
        </div>
      )
    }
  }
}