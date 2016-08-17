import axios from 'axios';

const API_KEY = '5caab54f4305a216d19277b929799c84';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// Action Creators always have to return an action. And an action 
	// and an action is an Object which ALWAYS has to have a type!
	console.log('Request', request);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

