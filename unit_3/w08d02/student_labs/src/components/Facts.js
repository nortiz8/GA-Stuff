import React, { Component } from 'react';

const Facts = props => {
  return (
    <div>
      <p>{props.shortBio}</p>
      <button onClick={props.sayHello}>Say Hey</button>
    </div>
  );
};

export default Facts;
