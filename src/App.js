import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Contacts from './list/contacts';
import { getContactsTest } from './api';

const App = props => {
  useEffect(() => {
    getContactsTest().then(contacts => {
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
      <Contacts />
    </div>
  );
};

const setContacts = payload => ({
  type: 'SET_CONTACTS',
  payload
});

export default connect(
  null,
  { setContacts }
)(App);
