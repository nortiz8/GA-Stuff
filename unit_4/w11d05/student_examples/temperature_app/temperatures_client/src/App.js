import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BarChart from './components/BarChart.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  render() {
    return (
      <div className='App'>
        <BarChart />
      </div>
    );
  }
}
export default App;
