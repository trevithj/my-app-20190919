import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Contact from './contact';

const Div = styled.div`
  font-family: Arial, sans-serif;
  font-size: calc(6px + 2vmin);
`;

const Contacts = props => {
  const { contacts } = props;
  return (
    <Div className='contacts'>
      {contacts.map(c => (
        <Contact key={c.id} name={c.name} job={c.jobTitle} />
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

export default connect(
  mapStateToProps,
  { setView }
)(Contacts);
