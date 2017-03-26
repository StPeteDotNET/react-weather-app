import axios from 'axios';

const API_KEY = '5caab54f4305a216d19277b929799c84'; // Want this to be a constant that can easily be changed without going into the function
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // Building a base URL

// Use constants to keep action types consistent between action creators
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	// Build URL to call API
	const url = `${ROOT_URL}&q=${city},us`;
	// Take the url that we crafted and make a request with it.
	// This returns a promise that we will need to do something with
	const request = axios.get(url);

	// Action Creators always have to return an action. And an action
	// is an Object which ALWAYS has to have a type!
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

// This action is taking advantage of 'Redux-Promise' to handle a promise that
// we received while using Axios -we used Axios to make our Ajax request.
// This middleware that we used was especially helpful because it automatically
// detected that we provided a 'payload' of a Promise. It stopped that action,
// waited for the promise to resolve. Once the promise resolved, it took the data
// coming back from the request, stuck it on the 'payload' property, and sent
// the action on to all of the reducers in our application.
// This allows us to not have to worry about Promises or callbacks for async actions.