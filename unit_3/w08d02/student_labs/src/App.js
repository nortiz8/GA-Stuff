import React, { Component } from 'react';
import './App.css';
import MyImage from './components/MyImage';
import BioFacts from './components/BioFacts';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='bio-container'>
          <MyImage imageSrc='https://myspace.com/common/images/user.png' />
          <BioFacts
            name='Nick Ortiz'
            age={27}
            hometown='Norwalk, CT'
            style={{ color: 'deeppink', fontFamily: 'Helvetica' }}
            shortBio="I was born and did things and now I'm here"
            onClick={this.sayHello}
          />
        </div>
        <div className='bio-container' />
      </div>
    );
  }
}

export default App;
