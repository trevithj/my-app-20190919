import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Frame = styled.div`
  margin-top: 10vh;
`;

const Div = styled.div`
  margin: auto;
  border: solid thin silver;
  padding: 50px;
  cursor: pointer;
  width: 600px;
  height: 300px;
  box-shadow: 10px 10px 5px silver;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 255, 0.01),
    rgba(0, 0, 255, 0.2)
  );
`;

const Col = styled.div`
  display: inline-block;
  width: 50%;
  height: 80%;
  vertical-align: middle;
`;

const Name = styled.div`
  padding-top: 1em;
  font-size: 24pt;
`;

const Given = styled.span`
  color: red;
  padding-right: 0.25em;
`;

const Job = styled.div`
  font-size: 12pt;
  font-weight: 100;
`;

const Sub = styled.div`
  font-size: 12pt;
  font-family: sans-serif;
  padding-left: 4%;
`;

const SubHead = styled.div`
  display: inline-block;
  width: 14%;
  font-weight: bold;
`;

const Card = props => {
  if (!props.name) return null;
  const { name, skills } = props;
  return (
    <Frame>
      <Div onClick={props.onClick}>
        <Col>
          <Name>
            <Given>{name.given}</Given>
            {name.family}
          </Name>
          <Job>{props.jobTitle}</Job>
        </Col>
        <Col>
          <ul>
            {skills.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Col>
        <Sub>
          <SubHead>Phone:</SubHead> {props.phone}
        </Sub>
        <Sub>
          <SubHead>E-mail:</SubHead> {props.email}
        </Sub>
        <Sub>
          <SubHead>URL:</SubHead> {props.url}
        </Sub>
      </Div>
    </Frame>
  );
};
Card.propTypes = {
  name: PropTypes.shape({
    given: PropTypes.string,
    family: PropTypes.string
  }).isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Card;
