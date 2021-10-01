import React from 'react';

const RecipeArticle = (props) => {
  return (
    <article className="article">
      <img id="food_image" src={props.img} alt="" className="img-thumbnail" />
      <div id="Ingredients_cont">
        <h1>Ingredients</h1>
        <p>{props.ingredients}</p>
      </div>
      <h1>Preparation</h1>
      <p>{props.preparation}</p>
    </article>
  );
}

export default RecipeArticle;
