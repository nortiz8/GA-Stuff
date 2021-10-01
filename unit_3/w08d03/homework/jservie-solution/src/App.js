import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    // call super to get rid of error when we're using a constructor function
    super();

    this.state = {
      // randomTrivia will store the entire JSON object
      randomTrivia: {},
      // questionButton is false until question button is clicked
      questionButton: false,
      // answerButton is false until question button is clicked
      answerButton: false,
      // score is the value we will increment/decrement on click
      score: 0
    };

    this.handleQuestionBtn = this.handleQuestionBtn.bind(this);
    this.showTriviaData = this.showTriviaData.bind(this);
    this.handleAnswerBtn = this.handleAnswerBtn.bind(this);
    this.showTriviaAnswer = this.showTriviaAnswer.bind(this);
    this.handleIncrementBtn = this.handleIncrementBtn.bind(this);
    this.handleDecrementBtn = this.handleDecrementBtn.bind(this);
    this.handleResetBtn = this.handleResetBtn.bind(this);
  }

  componentDidMount() {
    // Best practice: don't always dirty up your componentDidMount with http request logic. Use a function instead!
    this.getRandomTrivia();
  }

  async getRandomTrivia() {
    try {
      // notice the AWAIT keyword! This is important for async/await functions
      const apiCall = await axios.get('http://jservice.io/api/random');

      // first console log the apiCall object so you can step into the key you need
      // console.log('GET OK:', apiCall.data[0]);
      
      const triviaData = apiCall.data[0];
      
      this.setState({
        randomTrivia: triviaData
      });

      // change the console log to the randomTrivia state to see that it's been set correctly
      console.log('setState OK:', this.state.randomTrivia);
    } catch (err) {
      console.log('GET Error:', err.message);
    }
  }

  handleQuestionBtn() {
    // console log first to see if question button is linked up with this function
    console.log('Clicked question button');
    this.setState({
      questionButton: true
    });
  }

  showTriviaData() {
    return (
      <div>
        <h5>Category: {this.state.randomTrivia.category.title}</h5>
        <h5>Points: {this.state.randomTrivia.value}</h5>
        <h5>Question: {this.state.randomTrivia.question}</h5>
      </div>
    );
  }

  handleAnswerBtn() {
    // console log first to see if answer button is linked up with this function
    console.log('Clicked answer button');

    // notice this setState syntax? using prevState callback allows us to toggle between TRUE and FALSE 
    this.setState(prevState => ({
      answerButton: !prevState.answerButton
    }));
  }

  showTriviaAnswer() {
    return (
      <div>
        <h5>Answer: {this.state.randomTrivia.answer}</h5>
      </div>
    );
  }

  handleIncrementBtn() {
    console.log('Clicked increment button');
    const questionValue = this.state.randomTrivia.value;
    let increasedScore = 0;
    increasedScore += questionValue;
    this.setState({
      score: increasedScore
    });
  }

  handleDecrementBtn() {
    console.log('Clicked decrement button');
    const questionValue = this.state.randomTrivia.value;
    let decreasedScore = 0;
    decreasedScore -= questionValue;
    this.setState({
      score: decreasedScore
    });
  }

  handleResetBtn() {
    console.log('Clicked reset button');
    let initialScore = 0;
    this.setState({
      score: initialScore
    });
  }

  render() {
    // Ternary statement to conditionally render random trivia data on click 
    const renderTriviaData = this.state.questionButton ? this.showTriviaData() : <h5>Click to Reveal Question</h5>;

    // Ternary statement to conditionally render the answer on click
    const renderTriviaAnswer = this.state.answerButton ? this.showTriviaAnswer() : <h5>Click to Reveal Answer</h5>;

    return (
      <div>

        <h1>Welcome to Jeopardy: Skynet Edition!</h1>

        <button onClick={this.handleQuestionBtn}>Show Question</button>

        {renderTriviaData}

        <button onClick={this.handleAnswerBtn}>Show Answer</button>

        {renderTriviaAnswer}

        <div>
          <h5>Score: {this.state.score}</h5>
          <button onClick={this.handleIncrementBtn}>Increase</button>
          <button onClick={this.handleDecrementBtn}>Decrease</button>
          <button onClick={this.handleResetBtn}>Reset</button>
        </div>

      </div>
    );
  }
}

export default App;
