import { combineReducers } from 'redux';
// Import all reducers to combine into one.
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  // Any key to the object that we provide to combineReducers
  // will become a key on the global state
    weather: WeatherReducer
});

export default rootReducer;
