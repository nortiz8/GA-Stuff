import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div>
        <h2>Let's Play!</h2>
        <button
          onClick={() => {
            this.props.randomQuestion();
          }}
        >
          Get Question
        </button>
        <div>
          <p>Points: {this.props.points}</p>
          <p>Category: {this.props.category}</p>
          <p>Answer: {this.props.question}</p>
        </div>
      </div>
    );
  }
}

export default Question;
