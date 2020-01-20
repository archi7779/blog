import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/registration">Registration</Link>
      </li>
      <li>
        <Link to="/">MainPage</Link>
      </li>
        <li>
            <Link to="/add">Add Post</Link>
        </li>
    </ul>
  );
}

export default Nav;
