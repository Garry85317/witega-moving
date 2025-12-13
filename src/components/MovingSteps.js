import React from 'react';
import './MovingSteps.css';

const MovingSteps = () => {
  const steps = [
    '加 LINE 聯繫威特嘉',
    '提供客人搬運報價',
    '搬運日確認+簽訂契約',
    '搬運日抵達舊家開始搬運',
    '載送物品至新家'
  ];

  return (
    <section className="moving-steps">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の搬家步驟</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-number">{index + 1}</div>
            <div className="step-text">{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingSteps;

