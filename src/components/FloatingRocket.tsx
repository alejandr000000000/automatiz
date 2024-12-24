import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const FloatingRocket = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-8 z-40 transition-all duration-300 ease-out"
      style={{ 
        top: `${Math.min(Math.max(scrollPosition / 5, 20), 80)}%`,
        transform: `rotate(${scrollPosition / 20}deg)`
      }}
    >
      <Rocket 
        className="w-8 h-8 text-blue-600 animate-float" 
        style={{ filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.3))' }}
      />
    </div>
  );
};

export default FloatingRocket;