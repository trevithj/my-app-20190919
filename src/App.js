import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Contacts from './list/contacts';
import ByLetter from './list/byLetter';
import Card from './card';
import { getContacts } from './api';

const App = props => {
  useEffect(() => {
    getContacts().then(contacts => {
      props.setContacts(contacts);
      console.log('useEffect 12');
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p className='App-title'>The Contacts List App</p>
      </header>
      {props.view === 'list' && <Contacts />}
      {props.view === 'byLetter' && <ByLetter />}
      {props.view === 'card' && (
        <Card {...props.contact} onClick={() => props.setView('list')} />
      )}
    </div>
  );
};

const setContacts = payload => ({
  type: 'SET_CONTACTS',
  payload
});
const setView = view => ({
  type: 'SET_VIEW',
  payload: view
});

export default connect(
  state => {
    return { view: state.view, contact: state.selected };
  },
  { setContacts, setView }
)(App);
