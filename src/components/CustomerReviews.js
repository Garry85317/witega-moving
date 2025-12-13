import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      name: '林小姐',
      role: '忙碌的上班族媽媽',
      rating: 5,
      content: '威特嘉搬家真的很專業！師傅們動作迅速又仔細，我們家有很多易碎品，他們都用專業的方式包裝保護，**整個搬家過程非常順利，完全沒有損壞任何物品**，而且價格透明合理，非常推薦！'
    },
    {
      name: '王大哥',
      role: '剛退休的熱心大叔',
      rating: 5,
      content: '這次搬家讓我印象深刻，威特嘉的團隊非常有效率，從早上開始到下午就全部完成了，**師傅們都很親切，會主動詢問物品擺放位置**，讓我省了不少心，服務品質真的沒話說！'
    },
    {
      name: '張先生',
      role: '科技公司的專案經理',
      rating: 5,
      content: '因為工作調動需要緊急搬家，威特嘉很快就安排了時間，搬家當天師傅們準時到達，**整個流程非常流暢，溝通清楚明確**，讓我可以在搬家當天就安心入住新家，真的很感謝！'
    },
    {
      name: '李同學',
      role: '研究所學生',
      rating: 5,
      content: '第一次自己搬家有點緊張，但威特嘉的服務讓我完全放心，師傅們很細心地幫我整理打包，**價格也很實惠，完全符合學生的預算**，整個過程都很順利，下次搬家一定還會找他們！'
    },
    {
      name: '黃先生',
      role: '經營小生意的老闆',
      rating: 5,
      content: '我們公司要搬遷，找了威特嘉來幫忙，他們對商業搬遷很有經驗，**不僅速度快，而且對設備保護做得很好**，讓我們公司可以快速恢復營運，專業度真的沒話說！'
    },
    {
      name: '劉小姐',
      role: '注重細節的完美主義者',
      rating: 5,
      content: '我對搬家很要求細節，威特嘉完全符合我的期待，他們會先確認所有物品的位置，**搬運過程中每個步驟都很仔細，還會主動詢問我的意見**，讓我覺得很被尊重，服務品質一流！'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  return (
    <section className="customer-reviews">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">威特嘉の顧客好評</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="reviewer-name">{review.name}</div>
              <div className="reviewer-role">{review.role}</div>
            </div>
            <div className="review-rating">
              {renderStars(review.rating)}
            </div>
            <div className="review-content">
              {review.content.split('**').map((part, i) => 
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

