import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'

import App from './App';
import rootReducer from './Redux_index'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)))
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root')
);

// serviceWorker.unregister();
