import React, { Component } from 'react';
import './App.css';

// Import JSON data
import recipeData from './data/recipe.json';
// Import child components
import RecipeHeader from './components/RecipeHeader';
import RecipeUL from './components/RecipeUL';
import RecipeArticle from './components/RecipeArticle';
import AppFooter from './components/AppFooter';

class App extends Component {
  constructor() {
    // Call super() to avoid error when you have a constructor function
    super();

    // Declare and initialize state for each object key from recipe.json
    this.state = {
      title: recipeData.title,
      author: recipeData.byLine.name,
      ingredients: recipeData.ingredients,
      preparation: recipeData.Preparation,
      activePrep: recipeData.activePrep,
      totalPrep: recipeData.totalPrep,
      servings: recipeData.servings,
      img: recipeData.img
    };
  }

  render() {
    return (
      <div className="">

        <RecipeHeader
          title={this.state.title}
          author={this.state.author}
        />

        <RecipeUL
          activePrep={this.state.activePrep}
          totalPrep={this.state.totalPrep}
          servings={this.state.servings}
        />

        <RecipeArticle
          img={this.state.img}
          ingredients={this.state.ingredients}
          preparation={this.state.preparation}
        />

        <AppFooter />
        
      </div>
    )
  }
}

export default App;
