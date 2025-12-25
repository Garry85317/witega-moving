import React from 'react';
import './LineButton.css';

const LineButton = () => {
  const lineUrl = 'https://line.me/R/ti/p/@703rvibx';

  const handleClick = () => {
    // Google Ads 转化追踪
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17822651163',
        'event_category': 'engagement',
        'event_label': 'LINE_Button_Click',
        'value': 1.0,
        'currency': 'TWD'
      });
      
      // 追踪按钮点击事件
      window.gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': 'LINE_Button',
        'value': 1
      });
    }
    
    window.open(lineUrl, '_blank');
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

