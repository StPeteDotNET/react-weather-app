import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Import this middleware for handling AJAX requests
import ReduxPromise from 'redux-promise';
// Import logger middleware
import createLogger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';

const loggerMiddleware = createLogger();
// This applies middleware to the store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
