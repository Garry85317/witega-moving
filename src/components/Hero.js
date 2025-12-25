import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-main-title">🚚 威特嘉精緻搬家：台中搬家首選，精緻、專業、零負擔！ 🏠</h2>
        <p className="hero-intro">
          身在台中的您，無論是<strong>套房搬家</strong>、小家庭或公司行號搬遷，威特嘉精緻搬家提供一站式、<strong>24小時全年無休</strong>的<strong>台中搬家服務</strong>。
          <strong>套房搬家最低1500元起</strong>，<strong>加LINE預約再折500元</strong>！從 <strong>LINE 線上免費估價</strong>、<strong>價格透明不亂加價</strong>，到現場定位點交，我們用專業、細心與效率，讓您輕鬆迎接新生活！
        </p>
        
        <div className="hero-reasons">
          <h3 className="hero-reasons-title">💎 為什麼台中搬家要選威特嘉精緻搬家：</h3>
          <ul className="hero-reasons-list">
            <li><strong>免費估價、價格透明：</strong> 提供 <strong>LINE 線上免費估價</strong>與到府估價，公開報價明細，<strong>拒絕任何隱藏費用</strong>。<strong>套房搬家1500元起</strong>，<strong>3.5噸車3500元</strong>，<strong>5噸車4500元</strong>，價格清楚透明。</li>
            <li><strong>台中在地團隊，熟悉各區域：</strong> 專營<strong>台中搬家</strong>與<strong>中彰投搬家</strong>路線，評估動線更精準、搬運更有效率。</li>
            <li><strong>精緻搬運，全程細心呵護：</strong> 從拆裝家具、家電防護、專業吊車到新家定位點交，細節我們幫您顧好。</li>
            <li><strong>24小時服務、全年無休：</strong> <strong>搬家時間任您選</strong>，不論平日、假日或半夜，都能配合您的時段。</li>
            <li><strong>加LINE預約享優惠：</strong> 立即加 <strong>LINE（@703rvibx）</strong> 預約<strong>台中搬家服務</strong>，即可享<strong>500元優惠折扣</strong>！</li>
          </ul>
        </div>
        
        <p className="hero-tagline">
          💼 不只搬家，更搬運您的期待！
        </p>
        <p className="hero-final">
          威特精緻搬家，讓搬遷成為輕鬆愉快的事。
        </p>
      </div>
      
      <div className="hero-features">
        <h2 className="section-title">威特嘉出馬幫你搬家</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">套房搬家最低1500元</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">加賴搬家費用優惠500元</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">幫忙處理廢棄家具</div>
          </div>
          <div className="feature-item">
            <div className="checkmark">☑️</div>
            <div className="feature-text">可加購打包服務</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

