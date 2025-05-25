import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src="/assets/titan-logo.png" alt="Titan Logo" style={{ height: 90 }} />
      <nav>
        <a href="" style={{ margin: '0 15px' }}>Balls</a>
        <a href="" style={{ margin: '0 15px' }}>Clubs</a>
        <a href="" style={{ margin: '0 15px' }}>Gear</a>
        <a href="" style={{ margin: '0 15px' }}>Tour</a>
        <a href="" style={{ margin: '0 15px' }}>Fitting</a>
        <a href="" style={{ margin: '0 15px' }}>Videos</a>
        <a href="" style={{ margin: '0 15px' }}>Women</a>
      </nav>
    </div>
  </header>
);

export default Header;