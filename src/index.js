//MAIN
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {test: 123, data: {} };

const reducer = (state, newState) => {
	return {...state, ...newState};
};


const store = createStore(reducer, initialState);

ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
