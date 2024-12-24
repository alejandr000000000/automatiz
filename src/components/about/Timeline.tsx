import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: "2020",
      title: "Fundación",
      description: "Inicio de operaciones con un equipo de expertos en automatización."
    },
    {
      year: "2021",
      title: "Expansión",
      description: "Ampliación de servicios y primer milestone de 100 clientes satisfechos."
    },
    {
      year: "2022",
      title: "Innovación",
      description: "Lanzamiento de nuestra plataforma de automatización inteligente."
    },
    {
      year: "2023",
      title: "Crecimiento",
      description: "Expansión internacional y apertura de nuevas oficinas."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Trayectoria</h2>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </>
                  )}
                </div>
                <div className="relative flex items-center justify-center w-8">
                  <div className="h-4 w-4 rounded-full bg-blue-600 shadow"></div>
                </div>
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;