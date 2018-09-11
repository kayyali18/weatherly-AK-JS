import React, { Component} from 'react'
import EachHour from './EachHour';
import { getWeather } from './weather-api';

export default class Hourly extends Component{
  constructor(props) {
    super(props);
    this.city = props.city
    this.state = props.state
    this.data = getWeather(this.city, this.state)
    this.prevProps = this.props
    this.hours = [0, 1, 2, 3, 4, 5, 6];
    this.state = {
        data: null
    };
  }

  componentDidMount () {
    this.data.then (data => {
      this.setState({
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
        <section className={`hourly-wrapper ${this.props.show}`}>
        {
          this.hours.map((hour, index) => {
          return <EachHour key={index} data={this.state.data} index={index}/>
          })
        }
  
        </section>
      )
    }
  }
}