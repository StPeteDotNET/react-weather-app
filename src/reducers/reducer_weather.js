import { FETCH_WEATHER } from '../actions/index';

// State argument is not application state, only the state
// this specific reducer is responsible for.

// When the user first boots the app up, there will be no state, unless
// we set a default. Undefined won't ever work, so at the very least, use null

// Never mutate the state, return a fresh object
export default function(state = [], action) {
    // 'action' arg will contain returned Promise from 'fetchWeather action creator
    // Start swtch statement to determine how to update state
    switch (action.type) {
      case FETCH_WEATHER:
        return handleWeatherData(state, action)
    }
    return state;
}


// Always strive to avoid mutating our state in here
// Instead we return a new object that will take the place of the existing state

// The use case here is called 'destructuring' an array.
function handleWeatherData(state, action) {
  // This is where we can (and probably should) opt for Object.assign
  return [action.payload.data, ...state]; // new array[ city, city, city ]
}