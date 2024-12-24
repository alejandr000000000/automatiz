import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/logo.png" alt="IAutomatic Services" className="h-8 brightness-0 invert" />
            <p className="text-gray-400">
              Transformando el futuro a través de la automatización inteligente.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Automatización</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Optimización</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Desarrollo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Consultoría</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Suscríbete para recibir noticias y actualizaciones.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} IAutomatic Services. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;