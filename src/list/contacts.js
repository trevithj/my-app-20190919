import React from 'react';
import { connect } from 'react-redux';

const Contacts = props => {
  const { contacts } = props.state;
  return (
    <div className='contacts'>
      {contacts.map(c => (
        <Contact key={c.id} name={c.name} job={c.jobTitle} />
      ))}
    </div>
  );
};

const Contact = props => {
  const name = `${props.name.given} ${props.name.family}`;
  return (
    <div className='contact'>
      <h3>{name}</h3>
      <p>{props.job}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Contacts);
