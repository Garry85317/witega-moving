import React from 'react';
import './MovingSteps.css';

const MovingSteps = () => {
  const steps = [
    '加 LINE 聯繫威特嘉',
    '免費估價、提供透明報價',
    '確認搬運日、簽訂契約',
    '搬運當天抵達舊居開始作業',
    '安全載運、新居定位點交'
  ];

  return (
    <section id="steps" className="moving-steps">
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

