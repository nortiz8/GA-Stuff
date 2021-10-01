import React from 'react';

const Recipe = props => {
  return (
    <div>
      <ul id='recipe_meta_data' className='list-group'>
        <li className='list-group-item'>Active: {props.activePrep} Hours</li>
        <li className='list-group-item'>Total: {props.totalPrep} Hours</li>
        <li className='list-group-item'>{props.servings} Servings</li>
      </ul>
      <article className='article'>
        <img id='food_image' src={props.img} alt='' className='img-thumbnail' />
        <div id='Ingredients_cont'>
          <h1>Ingredients</h1>
          {props.ingredients}
        </div>
        <h1>Preperation</h1>
        <p>{props.steps}</p>
        <p>{props.steps}</p>
        <p>{props.steps}</p>
      </article>
      <footer>Copyright &copy; by General Assembly With ❤️ </footer>
    </div>
  );
};

export default Recipe;
