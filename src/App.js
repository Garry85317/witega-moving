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
      <Footer />
    </div>
  );
}

export default App;

