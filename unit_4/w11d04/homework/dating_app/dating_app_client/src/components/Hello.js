import React, { Component } from 'react';
import axios from 'axios';

class Daters extends Component {
  state = {
    daters: []
  };
  componentDidMount() {
    this.getDaters();
  }
  async getDaters() {
    const response = await axios('http://localhost:3000/users');
    const data = response.data;
    this.setState({
      daters: data
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='left'>
          {this.state.daters.slice(0, 3).map(dater => {
            return (
              <div className='dater' key={dater.id}>
                <img src={dater.img} alt={dater.name} />
                <h3>Name: {dater.name} </h3>
                <h4>Starsign: {dater.starsign} </h4>
                <h4>Age: {dater.age} </h4>
              </div>
            );
          })}
        </div>
        <div className='main'></div>
        <div className='right'>
          {this.state.daters.slice(3).map(dater => {
            return (
              <div className='dater' key={dater.id}>
                <img src={dater.img} alt={dater.name} />
                <h3>Name: {dater.name} </h3>
                <h4>Starsign: {dater.starsign} </h4>
                <h4>Age: {dater.age} </h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Daters;
