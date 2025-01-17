import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const AboutHero = () => {
  return (
    <section id='about' className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovación y Excelencia en{' '}
            <span className="text-blue-600">Automatización</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            En IAutomatic Services, nos dedicamos a transformar la manera en que las empresas 
            operan a través de soluciones tecnológicas innovadoras y automatización inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Target className="w-8 h-8 text-blue-600" />,
              title: "Misión",
              description: "Transformar procesos empresariales mediante soluciones tecnológicas innovadoras."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
              title: "Visión",
              description: "Ser líderes globales en automatización y optimización de procesos empresariales."
            },
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Valores",
              description: "Innovación, excelencia, compromiso y orientación al cliente."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;