import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		// Our instance of SearchBar (this) has a function called onInputChange.
		// Bind that function to this, and then replace onInputChange with this
		// new bound instance of this function
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form
				onSubmit={this.onFormSubmit}
				className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite U.S. city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

// Anything returned from this function will end up as props
// on the SearchBar container
function mapDispatchToProps(dispatch) {
	// Whenever fetchWeather is called, the result should be passed
	// to all of our reducers

	return bindActionCreators({ fetchWeather }, dispatch);
	// Now we can call this.props.fetchWeather in this container
}

// Passing in null because this function is supposed to map our dispatch
// to the props of our container, it is supposed to go second.
// We are saying that we don't need state here
export default connect(null, mapDispatchToProps)(SearchBar);
