import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CardGrid from './components/CardGrid';
import TestimonialSection from './components/TestimonialSection';
import EmailBanner from './components/EmailBanner';
import Image from './components/Image';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Image />
      <CardGrid />
      <About />
      <TestimonialSection />
      <EmailBanner />
      <Footer />
    </div>
  );
}

export default App;
