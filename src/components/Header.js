import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-container">
          <img src="/images/LOGO.png" alt="威特嘉搬家 Logo" className="header-logo" />
        </div>
        <h1 className="header-title">台中優質平價搬家公司-威特嘉搬家</h1>
      </div>
    </header>
  );
};

export default Header;

