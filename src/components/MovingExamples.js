import React from 'react';
import './MovingExamples.css';

const MovingExamples = () => {
  const examples = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/案例/S__125632528_0.jpg`, alt: '威特嘉精緻搬家實例 - 專業搬家服務展示' },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/案例/S__125632529_0.jpg`, alt: '威特嘉搬家團隊 - 台中搬家公司實績' },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/案例/S__125632530_0.jpg`, alt: '威特嘉精緻搬家案例 - 安全搬運服務' },
  ];

  return (
    <section className="moving-examples">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の搬家實例</h2>
      <div className="examples-grid">
        {examples.map((example) => (
          <div key={example.id} className="example-item">
            <img src={example.src} alt={example.alt} className="example-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingExamples;

