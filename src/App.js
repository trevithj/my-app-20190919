import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Contacts from './list/contacts';
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
      {props.view === 'card' && (
        <Card {...props.contact} onClick={props.setViewToList} />
      )}
    </div>
  );
};

const setContacts = payload => ({
  type: 'SET_CONTACTS',
  payload
});
const setViewToList = () => ({
  type: 'SET_VIEW',
  payload: 'list'
});

export default connect(
  state => {
    return { view: state.view, contact: state.selected };
  },
  { setContacts, setViewToList }
)(App);
