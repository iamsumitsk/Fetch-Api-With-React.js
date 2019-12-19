import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <ul className = "nav-links">
            <Link style={navStyle} to='/users'>
               <h1>User Names</h1>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;