import React from 'react';

// Import recipe title component (grandchild)
import RecipeTitle from './RecipeTitle';

const RecipeHeader = (props) => {
  return (
    <header>

      <RecipeTitle title={props.title} />
      
      <cite className="contributors">
        <div>{props.author}</div>
      </cite>
    </header>
  );
}

export default RecipeHeader;
