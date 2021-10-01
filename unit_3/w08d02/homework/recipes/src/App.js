import React, { Component } from 'react';
import './App.css';
import data from '../data/recipe.json';
import Header from './components/Header';
import Recipe from './components/Recipe';

class App extends Component {
  render() {
    return (
      <div className='flex-container'>
        <Header title={data.title} name={data.byLine.name} />
        <Recipe
          activePrep={data.activePrep}
          totalPrep={data.totalPrep}
          servings={data.servings}
          img={data.img}
          ingredients={data.ingredients}
          steps={data.Preparation}
        />
      </div>
    );
  }
}

export default App;
