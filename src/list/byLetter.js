import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #dddddd;
  margin: 2em;
  font-family: Arial, sans-serif;
  font-size: calc(6px + 2vmin);
`;

const ByLetter = props => {
  const { contacts } = props;
  const counts = {};
  contacts.forEach(c => {
    const prefix = c.name.given[0].toUpperCase();
    const n = counts[prefix] || 0;
    counts[prefix] = n + 1;
  });
  const keys = Object.keys(counts).sort();

  return (
    <Div onClick={props.setListView}>
      {keys.map(k => (
        <div key={k}>
          {k} = {counts[k]}
        </div>
      ))}
    </Div>
  );
};

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

const setListView = () => ({
  type: 'SET_VIEW',
  payload: 'list'
});

export default connect(
  mapStateToProps,
  { setListView }
)(ByLetter);
