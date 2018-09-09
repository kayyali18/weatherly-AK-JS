import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: ''
         }
    }
    render() { 
        return ( 
            <form className = 'input-form'>
                <label> Enter your location:
                    <input className="city-input"
                        type="text"
                        value={this.state.location}
                        placeholder="Enter location "
                        aria-label="Input field for location"
                        onChange={event => {
                            this.setState({
                                location: event.target.value
                            })
                        }} />
                </label>
                <button 
                    className="submit-btn"
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        this.props.resetLocation(this.state.location);
                    }}
                >Search</button>
            </form>
         );
    }
}
 
export default Input;

// location = location.split(',');
// location[0] = location[0].replace(' ', '_');