import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: solid thin silver;
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
    <Div className='contact'>
      <Name>{name}</Name>
      <Job>{props.job}</Job>
    </Div>
  );
};

export default Contact;
