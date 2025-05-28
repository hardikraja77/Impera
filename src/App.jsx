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
import Insta from './components/Insta';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Image />
      <Insta />
      <CardGrid />
      <About />
      <EmailBanner />
      <Footer />
    </div>
  );
}

export default App;
