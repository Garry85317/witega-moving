import React from 'react';
import './ServiceItems.css';
import { 
  FaCalculator, 
  FaHome, 
  FaBuilding, 
  FaTrashAlt, 
  FaBroom, 
  FaBoxOpen, 
  FaClock,
  FaFileContract 
} from 'react-icons/fa';

const ServiceItems = () => {
  const services = [
    { name: '免費線上/到府估價（LINE 預約）', icon: FaCalculator },
    { name: '個人套房/整層住家搬遷', icon: FaHome },
    { name: '公司工廠', icon: FaBuilding },
    { name: '廢棄物清運', icon: FaTrashAlt },
    { name: '室內清潔', icon: FaBroom },
    { name: '到府送紙箱', icon: FaBoxOpen },
    { name: '全省24小時服務', icon: FaClock },
    { name: '簽訂契約 保障您的權益', icon: FaFileContract }
  ];

  return (
    <section id="services" className="service-items">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">▶我們の服務項目◀</h2>
      <p className="service-intro-text">
        威特嘉精緻搬家深耕<strong>台中搬家</strong>市場，無論是<strong>學生套房搬家</strong>、<strong>小家庭搬家</strong>、整棟透天或<strong>公司辦公室搬遷</strong>，
        都能依照您的狀況客製<strong>搬家方案</strong>。從<strong>LINE免費估價</strong>、紙箱提供、專業搬運到<strong>廢棄物清運</strong>與<strong>室內清潔</strong>，
        讓您一次完成<strong>台中搬家</strong>相關需求，不用東找西問。<strong>套房搬家最低1500元起</strong>，<strong>加LINE預約再折500元</strong>！
      </p>
      <div className="services-grid">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="service-item">
              {IconComponent && (
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                </div>
              )}
              <h3 className="service-name">{service.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceItems;

