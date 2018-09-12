import React, { Component} from 'react'
import EachHour from './EachHour';
import { getWeather } from './weather-api';

export default class Hourly extends Component{
  constructor(props) {
    super(props);
    this.prevProps = this.props
    this.hours = [0, 1, 2, 3, 4, 5, 6];
    this.state = {
        data: null
    };
  }

  componentDidMount () {
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