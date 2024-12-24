import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingRocket from './components/FloatingRocket';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingRocket />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;