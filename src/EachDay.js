import React, { Component } from 'react';

class EachDay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className='day-style'>
            {/* Display Current Day */}
            <h3 className='current-day current-component'>{this.props.data.forecast.txt_forecast.forecastday[this.props.counter].title}</h3>
            {/* Pull Temp for current location */}
            <p className="curr-temp current-component">
            Hi - Lo
            </p>
            <p className='hi-lo'>
            {this.props.data.forecast.simpleforecast.forecastday[this.props.index].high.fahrenheit}
            - {this.props.data.forecast.simpleforecast.forecastday[this.props.index].low.fahrenheit}
            </p>

            {/* Icons */}
            <img className='curr-icon' src={this.props.data.forecast.simpleforecast.forecastday[this.props.index].icon_url} />
    
            {/* Pull Hi-Lo for Current location */}
            <p className="feels-like">{this.props.data.current_observation.weather}</p>
            </article>
         );
    }
}
 
export default EachDay;