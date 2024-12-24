import React from 'react';
import { Clock, TrendingUp, Scale, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Ahorro de tiempo',
    description: 'Reduce drásticamente el tiempo dedicado a tareas manuales.'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    title: 'Mayor eficiencia',
    description: 'Optimiza tus operaciones y mejora la productividad.'
  },
  {
    icon: <Scale className="w-10 h-10 text-blue-600" />,
    title: 'Escalabilidad',
    description: 'Crece sin preocupaciones con soluciones que escalan contigo.'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: 'Innovación',
    description: 'Mantente a la vanguardia con tecnología de última generación.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones pueden transformar tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;