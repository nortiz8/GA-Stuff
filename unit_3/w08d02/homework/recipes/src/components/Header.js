import React from 'react';

const Header = props => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        <cite className='contributors'>
          <div>By {props.name}</div>
        </cite>
      </header>
    </div>
  );
};

export default Header;
