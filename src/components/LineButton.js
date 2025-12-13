import React from 'react';
import './LineButton.css';

const LineButton = () => {
  const lineUrl = 'https://line.me/R/ti/p/@703rvibx';

  const handleClick = () => {
    window.open(lineUrl, '_blank');
  };

  return (
    <div className="line-button-container">
      <button className="line-button" onClick={handleClick}>
        <span className="line-button-text">立即加Line預約折$500</span>
      </button>
    </div>
  );
};

export default LineButton;

