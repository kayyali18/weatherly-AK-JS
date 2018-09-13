import React, { Component} from 'react'

const getWeather = require ('./weather-api.js').getWeather

export default class Current extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data.current_observation) return null
    return (
    <article className='current-weather current-component'>
      <h2 className='current-location current-component'>{this.props.data.current_observation.observation_location.full}</h2>
      <h3 className='current-day current-component'>{this.props.data.forecast.txt_forecast.forecastday[0].title}</h3>
      <p className="curr-temp current-component">Temperature: {this.props.data.current_observation.temperature_string}</p>
      <img alt="Display visual weather condition" className='curr-icon' src={this.props.data.current_observation.icon_url} />
      <p className="day-summary current-component">{this.props.data.forecast.txt_forecast.forecastday[0].fcttext}</p>
    </article>
    )
  }
}



