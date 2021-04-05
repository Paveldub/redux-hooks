import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

const initialState = {
  cash: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return {
        ...state,
        cash: state.cash + action.payload,
      };

    case GET_CASH:
      return {
        ...state,
        cash: state.cash - action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

