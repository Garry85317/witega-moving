import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
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
    </section>
  );
};

export default Pricing;

