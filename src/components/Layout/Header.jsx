import React from 'react'
import './Header.css'

function Header(props) {
  //The title of aplication
  return (
    <div className="Header">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;