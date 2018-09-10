import React, { Component} from 'react'

const getWeather = require ('./weather-api.js').getWeather;

export default class TenDay extends Component{
  constructor() {
    super();
    this.data = getWeather('Denver', 'CO');
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    this.data.then (data => {
      this.setState ({
        data: data
      })
    })
  }


  render() {
    if (!this.state.data) return null;
    return (
      <div className='TenDayWeather'>
        <div className='DailyWeatherCard'>
        {/* Display Current Day */}
        <h3 className='current-day current-component'>{this.state.data.forecast.txt_forecast.forecastday[0].title}</h3>
        {/* Pull Temp for current location */}
        <p className="curr-temp">32</p>
        {/* Icons */}

        {/* Pull Hi-Lo for Current location */}
        <p className="hi-lo">Hi - Lo </p>
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +1 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +2 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +3 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +4 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +5 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +6 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +7 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location */}
        {/* Display Current Day +8 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>

        <div className='DailyWeatherCard'>
        {/* Display current Location*/}
        {/* Display Current Day +9 */}
        {/* Pull Temp for current location */}
        {/* Pull Hi-Lo for Current location */}
        {/* Decide Summary, or Pull summary if given */}
        </div>
      </div>
    )
  }
}


// from props map every other period to new array
// results.simpleforecast.forecastday[i++] 







