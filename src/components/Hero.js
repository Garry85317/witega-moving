import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2 className="hero-main-title">🚚 威特嘉精緻搬家｜全省搬家首選．精緻．專業．零負擔 🏠</h2>
        <p className="hero-intro">
          無論您身在何方，<strong>套房搬家</strong>、小家庭或公司行號搬遷，威特嘉精緻搬家提供<strong>全省一站式</strong>、<strong>24小時全年無休</strong>的專業搬家服務。
          <strong>套房搬家最低1500元起</strong>，<strong>加LINE預約再折500元</strong>！從 <strong>LINE 線上免費估價</strong>、<strong>價格透明不亂加價</strong>，到現場定位點交，我們以專業、細心與效率，陪您輕鬆迎接新生活。
        </p>

        <div className="hero-reasons">
          <h3 className="hero-reasons-title">💎 為什麼搬家都選威特嘉精緻搬家</h3>
          <ul className="hero-reasons-list">
            <li><strong>免費估價、價格透明：</strong>提供 <strong>LINE 線上免費估價</strong>與到府估價，公開報價明細、<strong>拒絕任何隱藏費用</strong>。<strong>套房搬家1500元起</strong>、<strong>3.5噸車3500元</strong>、<strong>5噸車4500元</strong>，每筆收費清楚透明。</li>
            <li><strong>全省服務、在地團隊：</strong>服務據點遍及<strong>全省</strong>，熟悉各縣市路線與動線規劃，評估更精準、搬運更有效率。</li>
            <li><strong>精緻搬運、全程細心呵護：</strong>從拆裝家具、家電防護、專業吊掛到新家定位點交，每個細節我們都替您顧好。</li>
            <li><strong>24小時服務、全年無休：</strong><strong>搬家時間任您挑</strong>，不論平日、假日或深夜，都能配合您的時段。</li>
            <li><strong>加LINE預約享優惠：</strong>立即加 <strong>LINE（@703rvibx）</strong> 預約<strong>全省搬家服務</strong>，馬上再享<strong>500元折扣</strong>！</li>
          </ul>
        </div>

        <p className="hero-tagline">
          💼 不只搬家，更搬運您對新生活的每一份期待
        </p>
        <p className="hero-final">
          威特嘉精緻搬家，讓每一次搬遷都成為輕鬆愉快的事。
        </p>
      </div>
      
      <div className="hero-features">
        <h2 className="section-title">威特嘉出馬，搬家一次到位</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">套房搬家最低 1500 元起</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">加 LINE 預約再折 500 元</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">代為清運廢棄家具</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">可加購專業打包服務</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

