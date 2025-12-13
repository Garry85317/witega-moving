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
    { name: '免費線上/到府估價', icon: FaCalculator },
    { name: '個人套房/整層住家搬遷', icon: FaHome },
    { name: '公司工廠', icon: FaBuilding },
    { name: '廢棄物清運', icon: FaTrashAlt },
    { name: '室內清潔', icon: FaBroom },
    { name: '到府送紙箱', icon: FaBoxOpen },
    { name: '全省24小時服務', icon: FaClock },
    { name: '簽訂契約 保障您的權益', icon: FaFileContract }
  ];

  return (
    <section className="service-items">
      <div className="divider">威特嘉精緻搬家_00後部隊</div>
      <h2 className="section-title">▶我們の服務項目◀</h2>
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

