import React from 'react';
import { Rocket, Globe, Target } from 'lucide-react';

const Future = () => {
  const goals = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      title: "Innovación Continua",
      description: "Desarrollo constante de nuevas soluciones tecnológicas."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Expansión Global",
      description: "Presencia en nuevos mercados internacionales."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Impacto Sostenible",
      description: "Compromiso con la transformación digital responsable."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proyección Futura</h2>
          <p className="text-xl text-gray-600">
            Nuestra visión para los próximos años
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;