import axios from 'axios';

const API_KEY = '5caab54f4305a216d19277b929799c84'; // Want this to be a constant that can easily be changed without going into the function
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // Building the URL

// Use constants to keep action types consistent between action creators
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// Take the url that we crafted and make a request with it.
	// This returns a promise that we will need to do something with
	const request = axios.get(url);

	// Action Creators always have to return an action. And an action
	// is an Object which ALWAYS has to have a type!
	console.log('Request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
