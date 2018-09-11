import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: '',
            state: ''
         }
    }

    updateLocation = () => {
        let data = {
            city: this.state.city,
            state: this.state.state
        }

        this.props.resetLocation(data)
    }

    render() { 
        return ( 
            <form className = 'input-form'>
                <label> Enter your location:
                    <input className="input"
                        type="text"
                        value={this.state.location}
                        placeholder="Enter City "
                        aria-label="Input field for location"
                        onChange={event => {
                            this.setState({
                                city: event.target.value
                            })
                        }} />
                    <input className="input"
                        type="text"
                        value={this.state.location}
                        placeholder="Enter State "
                        aria-label="Input field for location"
                        onChange={event => {
                            this.setState({
                                state: event.target.value
                            })
                        }} />
                </label>
                <button 
                    className="submit-btn"
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        this.updateLocation();
                    }}
                >Search</button>
            </form>
         );
    }
}
 
export default Input;

// location = location.split(',');
// location[0] = location[0].replace(' ', '_');