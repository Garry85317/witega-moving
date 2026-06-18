import React from 'react';
import './MovingExamples.css';

const MovingExamples = () => {
  const examples = [
    { 
      id: 1, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632528_0.jpg`, 
      alt: '威特嘉精緻搬家實例 - 全省搬家專業服務展示，24小時搬家服務'
    },
    { 
      id: 2, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632529_0.jpg`, 
      alt: '威特嘉搬家團隊 - 全省搬家公司實績，套房搬家、家庭搬家服務'
    },
    { 
      id: 3, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__125632530_0.jpg`, 
      alt: '威特嘉精緻搬家案例 - 全省搬家安全搬運服務，價格透明免費估價'
    },
    { 
      id: 4, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__126443548.jpg`, 
      alt: '威特嘉搬家服務實例 - 專業搬家團隊，細心搬運客戶物品' 
    },
    { 
      id: 5, 
      src: `${process.env.PUBLIC_URL}/images/案例/S__40509478.jpg`, 
      alt: '威特嘉精緻搬家案例 - 全省搬家專業服務，安全搬運保障'
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/案例/S__40509480.jpg`,
      alt: '威特嘉搬家實績 - 全省搬家公司服務展示，客戶滿意推薦'
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48464007_0.jpg`,
      alt: '威特嘉精緻搬家實例 - 全省搬家專業團隊，家具細心包裝保護'
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48464008_0.jpg`,
      alt: '威特嘉搬家服務案例 - 全省到府搬家，物品安全搬運上車'
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48464009_0.jpg`,
      alt: '威特嘉精緻搬家實績 - 套房搬家、家庭搬家專業服務展示'
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48464010_0.jpg`,
      alt: '威特嘉搬家團隊案例 - 全省搬家公司專業搬運，價格透明'
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48464011_0.jpg`,
      alt: '威特嘉精緻搬家實例 - 全省搬家服務，新居定位點交'
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48504906.jpg`,
      alt: '威特嘉搬家服務展示 - 全省搬家專業團隊，動作俐落有效率'
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48504909_0.jpg`,
      alt: '威特嘉精緻搬家案例 - 全省到府搬家，貨物整齊堆疊上車'
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48504910_0.jpg`,
      alt: '威特嘉搬家實績 - 全省搬家公司，公司行號與家庭搬遷'
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/案例/S__48504911_0.jpg`,
      alt: '威特嘉精緻搬家實例 - 全省搬家專業服務，客戶安心推薦'
    },
  ];

  return (
    <section id="examples" className="moving-examples">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉的搬家實例</h2>
      <p className="examples-intro">
        威特嘉精緻搬家深耕<strong>全省搬家</strong>多年，累積豐富的<strong>實際案例</strong>與服務經驗。
        無論是<strong>套房搬家</strong>、<strong>家庭搬家</strong>或<strong>公司搬遷</strong>，我們都以專業與細心，完成每一趟託付。
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

