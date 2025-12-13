import React from 'react';
import './ServiceFeatures.css';

const ServiceFeatures = () => {
  return (
    <section className="service-features">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の服務特色</h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-label">免費</div>
          <div className="feature-name">紙箱供應</div>
        </div>
        <div className="feature-card">
          <div className="feature-label">搬家</div>
          <div className="feature-name">動作迅速</div>
        </div>
        <div className="feature-card">
          <div className="feature-label">免費</div>
          <div className="feature-name">估價服務</div>
        </div>
        <div className="feature-card">
          <div className="feature-label">契約簽訂</div>
          <div className="feature-name">最安心</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;

