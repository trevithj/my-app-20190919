import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Contact from './contact';

const Div = styled.div`
  font-family: Arial, sans-serif;
  font-size: calc(6px + 2vmin);
`;

const getHandleClick = (props, contact) => () => {
  console.log('handling...');
  props.selectContact(contact);
  props.setView('card');
};

const Contacts = props => {
  const { contacts } = props;
  return (
    <Div className='contacts'>
      <button onClick={() => props.setView('byLetter')}>By Letter</button>
      {contacts.map(c => (
        <Contact
          key={c.id}
          name={c.name}
          job={c.jobTitle}
          onClick={getHandleClick(props, c)}
        />
      ))}
    </Div>
  );
};

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

const setView = view => ({
  type: 'SET_VIEW',
  payload: view
});

const selectContact = contact => ({
  type: 'SELECT_CONTACT',
  payload: contact
});

export default connect(
  mapStateToProps,
  { setView, selectContact }
)(Contacts);
