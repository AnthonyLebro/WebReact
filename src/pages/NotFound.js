import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='not-found'>
      <div className='not-found-content'>
        <h1>404 Not Found</h1>
        <h1>rien a voir ici...</h1>
        <NavLink exact to='/' className='nav-link' activeClassName='nav-link-active'>Home</NavLink>
      </div>
    </main>
  );
};

export default NotFound;