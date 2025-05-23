import React from 'react';
import logo from '../assets/titan-logo.png'; // Asegúrate de tener el logo en assets

const Header = () => (
  <header className="header">
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src={logo} alt="Titan Logo" style={{ height: 40 }} />
      <nav>
        <a href="#" style={{ margin: '0 15px' }}>Balls</a>
        <a href="#" style={{ margin: '0 15px' }}>Clubs</a>
        <a href="#" style={{ margin: '0 15px' }}>Gear</a>
        <a href="#" style={{ margin: '0 15px' }}>Tour</a>
        <a href="#" style={{ margin: '0 15px' }}>Fitting</a>
        <a href="#" style={{ margin: '0 15px' }}>Videos</a>
        <a href="#" style={{ margin: '0 15px' }}>Women</a>
      </nav>
    </div>
  </header>
);

export default Header;