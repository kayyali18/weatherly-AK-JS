import React, { Component} from 'react'
import EachDay from './EachDay.js';

const getWeather = require ('./weather-api.js').getWeather;

export default class TenDay extends Component{
  constructor(props) {
    super(props);
    this.days = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  }

  render() {
    if (!this.props.data.forecast) return null;
    return (
      <section className={`ten-day-weather ${this.props.show}`}>
      <span className="scroll"><p>Scroll</p><i className="fas fa-arrow-circle-right"></i></span>
      {
        this.days.map((day, index) => {
        return <EachDay key={index} data={this.props.data} counter={day} index={index}/>
        })
      }
      </section>
    )
  }
}


// from props map every other period to new array
// results.simpleforecast.forecastday[i++] 







