import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Jeopardy!</h1>
        <div>
          <h2>Score: {this.props.score} </h2>
          <button
            onClick={() => {
              this.props.addPoints();
            }}
          >
            Increase
          </button>{' '}
          <button
            onClick={() => {
              this.props.subtractPoints();
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              this.props.resetScore();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Score;
