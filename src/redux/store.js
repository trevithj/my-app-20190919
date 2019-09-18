import { createStore } from 'redux';

const initialState = {
  view: 'list',
  contacts: [],
  selected: {}
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: payload };
    case 'SET_VIEW':
      return { ...state, view: payload };
    case 'SELECT_CONTACT':
      return { ...state, selected: payload };
    default:
      console.log(type, payload);
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
