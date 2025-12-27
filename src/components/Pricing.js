import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の收費方式</h2>
      
      <div className="pricing-section">
        <h3 className="pricing-section-title">以車計價</h3>
        <div className="pricing-cards-container">
          <div className="pricing-card">
            <h4 className="pricing-card-subtitle">一台3.5噸</h4>
            <div className="pricing-amount">$3,500</div>
          </div>
          <div className="pricing-card">
            <h4 className="pricing-card-subtitle">一台5噸</h4>
            <div className="pricing-amount">$4,500</div>
          </div>
        </div>
        <div className="pricing-notes">
          <p className="pricing-note-item">• 樓梯二樓以上一層樓加500</p>
          <p className="pricing-note-item">• 我們疊貨方式都是跟車頭一樣平平一樣高，如果有疊高情況會當下告知需要加多少金額$</p>
        </div>
      </div>

      <div className="pricing-section">
        <h3 className="pricing-section-title">廢棄物處理收費</h3>
        <div className="pricing-cards-container">
          <div className="pricing-card">
            <h4 className="pricing-card-subtitle">一台3.5噸</h4>
            <div className="pricing-amount">$11,000</div>
          </div>
          <div className="pricing-card">
            <h4 className="pricing-card-subtitle">一台5噸</h4>
            <div className="pricing-amount">$13,000</div>
          </div>
        </div>
        <div className="pricing-notes">
          <p className="pricing-note-item">• 以上價格都是一車滿</p>
          <p className="pricing-note-item">• 如果當下沒有滿一車會另行告知價格看當下東西是什麼</p>
        </div>
      </div>

      <div className="pricing-section pricing-section--seo">
        <h3 className="pricing-section-title">價格透明・免費估價・放心搬家</h3>
        <div className="pricing-notes">
          <p className="pricing-note-item">
            威特嘉精緻搬家以<strong>台中搬家</strong>與中彰投地區為主要服務範圍，從一開始的 LINE 線上免費估價、
            現場評估到正式搬家當天，所有費用明細都會清楚說明，<strong>價格透明、不亂喊價</strong>。
          </p>
          <p className="pricing-note-item">
            我們會依照搬運樓層、距離、車型與物品數量進行專業評估，先溝通、再搬家，避免臨時加價的糾紛，
            讓每一位需要<strong>台中精緻搬家</strong>的客人，都能安心把家交給我們。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

