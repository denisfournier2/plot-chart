import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;