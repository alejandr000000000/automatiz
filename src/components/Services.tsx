import React from 'react';
import { Settings, Workflow, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Automatización de tareas',
    description: 'Eliminamos las tareas repetitivas para que te centres en lo que realmente importa.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    icon: <Workflow className="w-12 h-12 text-blue-600" />,
    title: 'Optimización de flujos',
    description: 'Rediseñamos y optimizamos tus procesos para máxima eficiencia.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Desarrollo personalizado',
    description: 'Creamos soluciones de software adaptadas a tus necesidades específicas.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo Que Hacemos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros servicios están diseñados para impulsar tu productividad y eficiencia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;