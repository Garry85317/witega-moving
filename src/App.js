import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceFeatures from './components/ServiceFeatures';
import MovingExamples from './components/MovingExamples';
import CustomerReviews from './components/CustomerReviews';
import ServiceItems from './components/ServiceItems';
import Pricing from './components/Pricing';
import MovingSteps from './components/MovingSteps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LineButton from './components/LineButton';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <LineButton />
        <ServiceFeatures />
        <LineButton />
        <MovingExamples />
        <LineButton />
        <CustomerReviews />
        <ServiceItems />
        <LineButton />
        <Pricing />
        <MovingSteps />
        <LineButton />
        <FAQ />
      </main>
      {/* Google Map 區塊（位於 Footer 上方） */}
      <section className="map-section">
        <h2 className="section-title">公司位置</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9148919404233!2d120.62314690000001!3d24.174717399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d00265f4dff%3A0x8eecf01a0504a76f!2z5aiB54m55ZiJ57K-57e75pCs5a62!5e0!3m2!1sen!2stw!4v1766044734398!5m2!1sen!2stw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="公司位置地圖"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

