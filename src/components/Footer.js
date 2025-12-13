import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">聯絡資訊</h3>
          <div className="contact-info">
            <p><strong>LINE ID：</strong>@703rvibx</p>
            <p><strong>聯繫聯絡電話：</strong>0905286898</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">服務項目</h3>
          <p>家庭搬家、學生搬家、公司行號搬遷、自助搬家、垃圾清運處理</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">服務地區</h3>
          <p>全省、台中市、中彰投</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2025 威特嘉精緻搬家</p>
      </div>
    </footer>
  );
};

export default Footer;

