import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function Header() {
  var btnStyle = {
    backgroundColor: '#546d7a',
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px',
    marginBottom: '10px'
  };
  var centerStyle = {
    textAlign: 'center'
  };
  return (
    <div>
      <h1 style={centerStyle}>Discussion Forum</h1>
      <div style={centerStyle}>
        <Link style={btnStyle} className="waves-effect waves-light btn" to="/"><i className="material-icons left">cloud</i>Home</Link>
        <Link style={btnStyle} className="waves-effect waves-light btn" to="/discussion"><i className="material-icons left">cloud</i>Discussion Board</Link>
      </div>
    </div>
  );
}

export default Header;