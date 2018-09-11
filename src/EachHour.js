import React, { Component } from "react";

class EachHour extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <article className="hourly-weather">
        <h3 className='hour'>{this.props.data.hourly_forecast[this.props.index].FCTTIME.civil}</h3>
        <img className= "curr-icon" src={this.props.data.hourly_forecast[this.props.index].icon_url} />
        <p className='condition'>{this.props.data.hourly_forecast[this.props.index].condition}</p>
        <p>{this.props.data.hourly_forecast[this.props.index].temp.english}° F</p>
      </article>
    );
  }
}

export default EachHour;
