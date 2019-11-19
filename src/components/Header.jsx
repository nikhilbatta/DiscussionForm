import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Discussion Forum</h1>
      <Link to="/">Home</Link> | <Link to="/discussion">Discussion Board</Link>
    </div>
  );
}

export default Header;