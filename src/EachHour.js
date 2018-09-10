import React, { Component } from "react";

class EachHour extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="hourly-weather">
       
        <h3>{this.props.data.hourly_forecast[this.props.index].FCTTIME.civil}</h3>
        {/* Pull Temp for current location */}
        <p className="curr-temp">32</p>
        {/* Icons */}

        {/* Pull Hi-Lo for Current location */}
        <p className="hi-lo">Hi - Lo </p>
      </div>
    );
  }
}

export default EachHour;
