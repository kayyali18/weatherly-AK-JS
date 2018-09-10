import React, { Component } from 'react';

class EachDay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='DailyWeatherCard'>
            {/* Display Current Day */}
            <h3 className='current-day current-component'>{this.props.data.forecast.txt_forecast.forecastday[this.props.counter].title}</h3>
            {/* Pull Temp for current location */}
            <p className="curr-temp current-component">
            Hi - Lo
            </p>
            <p>
            {this.props.data.forecast.simpleforecast.forecastday[this.props.index].high.fahrenheit}
            - {this.props.data.forecast.simpleforecast.forecastday[this.props.index].low.fahrenheit}
            </p>

            {/* Icons */}
            <img className='curr-icon' src={this.props.data.forecast.simpleforecast.forecastday[this.props.index].icon_url} />
    
            {/* Pull Hi-Lo for Current location */}
            <p className="feels-like">{this.props.data.current_observation.weather}</p>
            </div>
         );
    }
}
 
export default EachDay;