import React from 'react';
import './MovingExamples.css';

const MovingExamples = () => {
  // TODO: 替換這些圖片路徑為實際的搬家實例圖片
  const examples = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/129308_0.jpg`, alt: '威特嘉精緻搬家實例 - 專業搬家服務展示' }, // TODO: 添加圖片
    { id: 2, src: `${process.env.PUBLIC_URL}/images/129324_0.jpg`, alt: '威特嘉搬家團隊 - 台中搬家公司實績' }, // TODO: 添加圖片
    { id: 3, src: `${process.env.PUBLIC_URL}/images/129317_0.jpg`, alt: '威特嘉精緻搬家案例 - 安全搬運服務' }, // TODO: 添加圖片
    { id: 4, src: `${process.env.PUBLIC_URL}/images/129300_0.jpg`, alt: '威特嘉搬家實例 - 專業搬家公司' }, // TODO: 添加圖片
  ];

  return (
    <section className="moving-examples">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の搬家實例</h2>
      <div className="examples-grid">
        {examples.map((example) => (
          <div key={example.id} className="example-item">
            {/* TODO: 替換為實際圖片 */}
            <div className="example-placeholder">
              <p>圖片待補: {example.alt}</p>
              <p className="placeholder-path">{example.src}</p>
            </div>
            {/* <img src={example.src} alt={example.alt} className="example-image" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingExamples;

