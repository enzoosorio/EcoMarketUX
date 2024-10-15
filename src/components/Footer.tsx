import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 mr-2" />
              <h2 className="text-xl font-bold">EcoMarket</h2>
            </div>
            <p className="text-sm">Comprometidos con el medio ambiente y tu bienestar.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-green-300">Inicio</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-300">Productos</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-300">Sobre Nosotros</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-300">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm mb-2">Email: info@ecomarket.com</p>
            <p className="text-sm mb-2">Teléfono: (123) 456-7890</p>
            <p className="text-sm">Dirección: Calle Verde 123, Ciudad Eco</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-sm mb-4">Recibe nuestras últimas ofertas y noticias eco-amigables.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-green-700 text-white px-4 py-2 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition duration-300"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
          <p>&copy; 2024 EcoMarket. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;