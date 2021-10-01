import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Score from './components/Score';
import Question from './components/Question';
import Answer from './components/Answer';
const url = 'http://jservice.io/api/random';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      question: null,
      answer: null,
      points: null,
      category: null,
      hidden: 'hidden'
    };
    this.randomQuestion = this.randomQuestion.bind(this);
    this.addPoints = this.addPoints.bind(this);
    this.subtractPoints = this.subtractPoints.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }
  async randomQuestion() {
    const response = await axios(url);
    const data = response.data[0];
    this.setState({
      question: data.question,
      answer: data.answer,
      points: data.value,
      category: data.category.title
    });
  }
  addPoints() {
    this.setState({
      score: (this.state.score += this.state.points)
    });
  }
  subtractPoints() {
    this.setState({
      score: (this.state.score -= this.state.points)
    });
  }
  resetScore() {
    this.setState({
      score: 0
    });
  }
  showAnswer() {
    if (this.state.hidden === 'hidden') {
      this.setState({ hidden: 'reveal' });
    } else if (this.state.hidden === 'reveal') {
      this.setState({ hidden: 'hidden' });
    }
  }

  render() {
    return (
      <div className='App'>
        <Score
          score={this.state.score}
          points={this.state.points}
          addPoints={this.addPoints}
          subtractPoints={this.subtractPoints}
          resetScore={this.resetScore}
        />
        <Question
          question={this.state.question}
          answer={this.state.answer}
          points={this.state.points}
          category={this.state.category}
          randomQuestion={this.randomQuestion}
        />
        <Answer
          answer={this.state.answer}
          hidden={this.state.hidden}
          showAnswer={this.showAnswer}
        />
      </div>
    );
  }
}

export default App;
