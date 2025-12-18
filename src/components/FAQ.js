import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '請問威特嘉搬家的估價方式有哪些？',
      answer: '我們有提供 LINE 線上免費估價、電話詢價，以及到府現場估價，且估價與報價內容公開透明，客人可依需求選擇最適合自己的方式！'
    },
    {
      question: '請問搬家過程中如有物品損壞破裂會怎麼處理？',
      answer: '請放心，我們有建立相關的賠償機制，如搬運過程中有物品損壞且是我們的疏失造成，皆會負起責任賠償。不過考量物品有折舊，賠償金額會以市價的兩成金額作為賠償上限。'
    },
    {
      question: '請問你們的服務地區有哪裡？',
      answer: '我們的服務地區以台中市區域為主，例如台中西屯、北屯、大里、大雅、豐原等等地區，另外還有包含中彰投。'
    },
    {
      question: '你們會不會有現場亂喊價格、坐地起價的情況發生？',
      answer: '不會！搬家前都可以事先簽定契約，也會依照數量多寡與搬運難度計算正確金額，若無超出預訂車輛不會額外加價。如有任何合理、需要加價的部分，也會事前向客人說明並取得同意，價格透明、絕不坐地起價！'
    },
    {
      question: '請問貴重物品你們有幫忙保險嗎？',
      answer: '不好意思，我們沒有提供物品加保的服務，如有貴重物品擔心遺失、損壞，客人們最好請自行保管！'
    },
    {
      question: '請問你們是24小時營業嗎？假日也有提供搬家服務嗎？',
      answer: '我們提供 24 小時服務、全年無休，平日、假日、連假或是晚上、清晨的搬家需求都可以協調時段。建議可先透過 LINE 與我們預約時間，我們會依照您的需求與地點安排最合適的搬家方案！'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">搬家常見問題</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <span>問題{index + 1}：{faq.question}</span>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                回覆：{faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

