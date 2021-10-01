import React, { Component } from 'react';
import Daters from './components/Hello';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <h1>Hello dating world!</h1>
        </header>
        <Daters />
        <footer>
          <Form />
        </footer>
      </div>
    );
  }
}

export default App;
