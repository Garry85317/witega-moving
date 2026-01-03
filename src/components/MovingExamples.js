import React from 'react';
import './MovingExamples.css';

const MovingExamples = () => {
  const examples = [
    { 
      id: 1, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632528_0.jpg`, 
      alt: '威特嘉精緻搬家實例 - 台中搬家專業服務展示，24小時搬家服務' 
    },
    { 
      id: 2, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632529_0.jpg`, 
      alt: '威特嘉搬家團隊 - 台中搬家公司實績，套房搬家、家庭搬家服務' 
    },
    { 
      id: 3, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632530_0.jpg`, 
      alt: '威特嘉精緻搬家案例 - 台中搬家安全搬運服務，價格透明免費估價' 
    },
    { 
      id: 4, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__126443548.jpg`, 
      alt: '威特嘉搬家服務實例 - 專業搬家團隊，細心搬運客戶物品' 
    },
    { 
      id: 5, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__40509478.jpg`, 
      alt: '威特嘉精緻搬家案例 - 台中搬家專業服務，安全搬運保障' 
    },
    { 
      id: 6, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__40509480.jpg`, 
      alt: '威特嘉搬家實績 - 台中搬家公司服務展示，客戶滿意推薦' 
    },
  ];

  return (
    <section id="examples" className="moving-examples">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の搬家實例</h2>
      <p className="examples-intro">
        威特嘉精緻搬家在<strong>台中搬家</strong>市場深耕多年，累積豐富的<strong>搬家實例</strong>與經驗。
        無論是<strong>套房搬家</strong>、<strong>家庭搬家</strong>或<strong>公司搬遷</strong>，我們都用專業與細心完成每一次任務。
      </p>
      <div className="examples-grid">
        {examples.map((example) => (
          <div key={example.id} className="example-item">
            <img 
              src={example.src} 
              alt={example.alt} 
              className="example-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingExamples;

