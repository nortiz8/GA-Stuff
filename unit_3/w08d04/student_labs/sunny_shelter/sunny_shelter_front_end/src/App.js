import React from 'react';
import './App.css';
import axios from 'axios';

let baseURL = 'http://localhost:3003';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    };
  }
  async getAnimals() {
    const response = await axios(`${baseURL}/animals`);
    const animals = response.data;
    console.log(animals);

    this.setState({
      animals: animals
    });
  }

  componentDidMount() {
    this.getAnimals();
  }

  render() {
    return (
      <div className='App'>
        <h1>Look at all these animals</h1>
      </div>
    );
  }
}

export default App;
