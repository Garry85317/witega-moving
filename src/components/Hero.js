import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-main-title">🚚 威特精緻搬家：您的搬家好夥伴，精緻、專業、零負擔！ 🏠</h1>
        <p className="hero-intro">
          無論是何種搬遷需求，威特精緻搬家提供一站式、24小時全年無休的貼心服務。從免費估價到定位點交，我們用專業、細心與效率，讓您輕鬆迎接新生活！
        </p>
        
        <div className="hero-reasons">
          <h3 className="hero-reasons-title">💎 選擇威特精緻搬家的理由：</h3>
          <ul className="hero-reasons-list">
            <li><strong>免費估價，公開透明：</strong> 拒絕隱藏費用，給您最合理的報價。</li>
            <li><strong>專業效率，保障權益：</strong> 簽訂正式合約，保障您的物品安全。</li>
            <li><strong>精緻搬運，全省到位：</strong> 從拆裝家具、專業吊車到新家定位點交，細節全包辦。</li>
            <li><strong>24 小時服務不間斷：</strong> 您的時間就是我們的時間，隨時為您待命！</li>
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

