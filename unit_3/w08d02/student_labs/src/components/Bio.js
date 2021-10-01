import React, { Component } from 'react';

const Bio = props => {
  return (
    <h2>
      {props.name} | {props.age} | {props.hometown}
    </h2>
  );
};

export default Bio;
