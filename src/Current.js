import React, { Component} from 'react'

const getWeather = require ('./weather-api.js').getWeather

export default class Current extends Component{
  constructor(props) {
    super(props);
    this.city = props.city
    this.state = props.state
    this.data = getWeather(this.city, this.state)
    this.prevProps = this.props
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    this.data.then(data => {
        this.setState ({
          data: data
      })
    })
  }

  componentDidUpdate (prevProps) {
    if (this.props.city !== prevProps.city || this.props.state !== prevProps.state) {
      this.data = getWeather (this.props.city, this.props.state)
      this.data.then (data => {
        this.setState({
          data: data
        })
      })
    }
  }

  render() {
    if (!this.state.data) return null
    return (
      <article className='current-weather current-component'>
    {/* Display current Location */}
    {/* <h1>{this.props.data.current_observation.location.full}</h1> */}
    <h2 className='current-location current-component'>{this.state.data.current_observation.observation_location.full}</h2>
    {/* Display Current Day */}
    <h3 className='current-day current-component'>{this.state.data.forecast.txt_forecast.forecastday[0].title}</h3>
    {/* Pull Temp for current location */}
    <p className="curr-temp current-component">Temperature: {this.state.data.current_observation.temperature_string}</p>
    {/* Pull Hi-Lo for Current location */}
    <img className='curr-icon' src={this.state.data.current_observation.icon_url} />
    {/* Decide Summary, or Pull summary if given */}
    <p className="day-summary current-component">{this.state.data.forecast.txt_forecast.forecastday[0].fcttext}</p>
    </article>
    )
  }
}



