//MAIN
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  view: 'main',
  contacts: []
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: payload };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
