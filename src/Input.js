import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: '',
            state: ''
         }
    }

    updateLocation = (boolean) => {
        let data = {
            city: this.state.city,
            state: this.state.state,
            saved: boolean
        }

        this.props.resetLocation(data)
    }

    render() { 
        return ( 
            <form className = 'input-form'>
                <label className="input-label"> Enter your location:
                    <input className="input"
                        type="text"
                        value={this.state.city}
                        placeholder="Enter City "
                        aria-label="Input field for city"
                        onChange={event => {
                            this.setState({
                                city: event.target.value,
                            })
                        }} />
                    <input className="input"
                        type="text"
                        value={this.state.state}
                        placeholder="Enter State "
                        aria-label="Input field for state"
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
                        this.updateLocation(false);
                    }}
                >Search</button>
                <button 
                    className="submit-btn"
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        this.updateLocation(true);
                    }}
                >Save</button>
            </form>
         );
    }
}
 
export default Input;