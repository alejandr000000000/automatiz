import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Transformamos el tedio en{' '}
          <span className="text-blue-600 relative inline-block">
            eficiencia
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path className="text-blue-200 fill-current" d="M0 15 Q50 0 100 15 L100 20 L0 20 Z"></path>
            </svg>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Soluciones automatizadas que optimizan tu tiempo y transforman tus procesos
        </p>
        <button 
          onClick={scrollToServices}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Empieza ahora
        </button>
        
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              const offset = 80;
              const elementPosition = aboutSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 hover:text-blue-600 transition-colors duration-200"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;