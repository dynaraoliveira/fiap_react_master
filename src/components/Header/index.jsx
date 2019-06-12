import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

const Header = () =>{

  return(<header className="header" >
    <div className="mdl-grid">
      <div className="mdl-cell--12-col">
        <img alt="log" src={logo}  className="header__logo"/>
      </div>
     </div>
  </header>);

};
export default Header;