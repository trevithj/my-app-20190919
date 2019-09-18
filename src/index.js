//MAIN
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  view: 'main',
  contacts: [
    {
      id: 64,
      name: { given: 'Christy', family: 'Jenik' },
      email: 'cjenik1r@spiegel.de',
      phone: '987-408-6755',
      url: 'http://nhs.uk',
      jobTitle: 'Quality Engineer',
      address: { street: '560 Amoth Terrace', city: 'København' },
      skills: ['Outdoor Education', 'WML', 'CPE', 'Routers']
    }
  ]
};

const reducer = (state, newState) => {
  return { ...state, ...newState };
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
