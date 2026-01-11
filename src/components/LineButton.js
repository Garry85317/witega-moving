import React from 'react';
import './LineButton.css';

const LineButton = () => {
  const lineUrl = 'https://line.me/R/ti/p/@703rvibx';

  const handleClick = (e) => {
    e.preventDefault();
    
    // Google Ads 转化追踪
    if (window.gtag_report_conversion) {
      // 使用转化追踪函数
      window.gtag_report_conversion();
    }
    
    // 打开 LINE 链接
    window.open(lineUrl, '_blank');
    
    return false;
  };

  return (
    <div className="line-button-container">
      <button 
        className="line-button" 
        onClick={handleClick}
        aria-label="立即加 Line 線上免費估價，預約再折500元"
      >
        <span className="line-button-text">立即加 Line 線上免費估價｜預約再折 $500</span>
      </button>
    </div>
  );
};

export default LineButton;

