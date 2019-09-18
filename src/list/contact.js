import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: solid thin silver;
  cursor: pointer;
`;

const Name = styled.div`
  display: inline-block;
  width: 40%;
  color: red;
  padding-right: 2em;
`;

const Job = styled.span`
  font-weight: 100;
`;

const Contact = props => {
  const name = `${props.name.given} ${props.name.family}`;
  return (
    <Div className='contact' onClick={props.onClick}>
      <Name>{name}</Name>
      <Job>{props.job}</Job>
    </Div>
  );
};
Contact.propTypes = {
  name: PropTypes.shape({
    given: PropTypes.string,
    family: PropTypes.string
  }).isRequired,
  job: PropTypes.string,
  onClick: PropTypes.func
};

export default Contact;
