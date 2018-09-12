import React, { Component} from 'react'
import EachHour from './EachHour';
import { getWeather } from './weather-api';

export default class Hourly extends Component{
  constructor(props) {
    super(props);
    this.hours = [0, 1, 2, 3, 4, 5, 6];
  }

  render() {
    if (!this.props.data.hourly_forecast) return null;
    return (
      <section className={`hourly-wrapper ${this.props.show}`}>
      {
        this.hours.map((hour, index) => {
        return <EachHour key={index} data={this.props.data} index={index}/>
        })
      }

      </section>
    )
  }
}