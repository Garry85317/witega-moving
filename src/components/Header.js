import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-container">
          <img src={`${process.env.PUBLIC_URL}/images/LOGO.png`} alt="威特嘉精緻搬家 Logo - 台中優質平價搬家公司" className="header-logo" />
        </div>
        <div className="header-title-container">
          <h1 className="header-title">
            <span className="header-title-line1">台中優質平價搬家公司</span>
            <span className="header-title-line2">威特嘉精緻搬家</span>
            <span className="header-title-line3">24小時服務 | 免費估價 | 套房搬家1500元起</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

