import React, { Component } from 'react';
// Need connect to 'connect' React to Redux
import { connect } from 'react-redux';
// Turns an object whose values are action creators into an object with the same keys,
// but with every action creator wrapped into a dispatch call so they may be invoked directly
import { bindActionCreators } from 'redux';
// Pull in the action creator that we intend to use
import { fetchWeather } from '../actions/index';

// The SearchBar needs to have the ability to talk to Redux to modify state,
// so we promote it to a container

// Also, since we are using 'connect' at the bottom of this file, we no longer
// export this component
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// This is local state independent of Redux store
		this.state = { term: '' };
		// Our instance of SearchBar (this) has a function called onInputChange.
		// Bind that function to this, and then replace onInputChange with this
		// new bound instance of this function (overriding local method, context)
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		// Declaratively set the state of the input field
		// (we tell the field what the state is, not the other way around)
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// For form elements, use preventDefault() to override
		// default browser actions (in this case, would attempt a POST to server)
		event.preventDefault();

		// We need to go and fetch weather data, call Action Creator
		this.props.fetchWeather(this.state.term);
		// Mutate local state independent of Redux store
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

// Passing in null as first argument because this function is supposed to
// map our dispatch to the props of our container, it is supposed
// to go second. We are saying that we don't need state here
export default connect(null, mapDispatchToProps)(SearchBar);
