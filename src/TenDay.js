import React, { Component} from 'react'
import EachDay from './EachDay.js';
import Hourly from './Hourly.js';

const getWeather = require ('./weather-api.js').getWeather;

export default class TenDay extends Component{
  constructor(props) {
    super(props);
    this.city = props.city
    this.state = props.state
    this.data = getWeather(this.city, this.state)
    this.prevProps = this.props
    this.days = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
    this.state = {
      data: null,
    }
  }

  componentDidMount () {
    this.data.then (data => {
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
    if (!this.state.data) return null;
    else if (this.state.data) {
      return (
        <div className='TenDayWeather'>
        {
          this.days.map((day, index) => {
          return <EachDay data={this.state.data} counter={day} index={index}/>
          })
        }
  
        </div>
      )
    }
  }
}


// from props map every other period to new array
// results.simpleforecast.forecastday[i++] 







