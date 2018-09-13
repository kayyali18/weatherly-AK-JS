import React, { Component } from 'react';

class EachDay extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <article className='day-style'>
            <h3 className='current-day current-component'>{this.props.data.forecast.txt_forecast.forecastday[this.props.counter].title}</h3>
            <p className="curr-temp current-component">
            Hi - Lo
            </p>
            <p className='hi-lo'>
            {this.props.data.forecast.simpleforecast.forecastday[this.props.index].high.fahrenheit}
            - {this.props.data.forecast.simpleforecast.forecastday[this.props.index].low.fahrenheit}
            </p>
            <img alt="Display visual weather condition" className='curr-icon' src={this.props.data.forecast.simpleforecast.forecastday[this.props.index].icon_url} />
            <p className="feels-like">{this.props.data.current_observation.weather}</p>
            </article>
         );
    }
}
 
export default EachDay;