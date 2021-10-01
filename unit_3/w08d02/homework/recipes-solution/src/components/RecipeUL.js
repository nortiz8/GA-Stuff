import React from 'react';

const RecipeUL = (props) => {
  return (
    <ul id="recipe_meta_data" className="list-group">
      <li className="list-group-item">Active: {props.activePrep} Hour</li>
      <li className="list-group-item">Total: {props.totalPrep} Hours</li>
      <li className="list-group-item">{props.servings} Servings</li>
    </ul>
  );
}

export default RecipeUL;
