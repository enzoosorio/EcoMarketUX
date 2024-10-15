import React, { useState } from 'react';
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">EcoMarket</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-green-200">Inicio</a>
          <a href="#" className="hover:text-green-200">Productos</a>
          <a href="#" className="hover:text-green-200">Sobre Nosotros</a>
          <a href="#" className="hover:text-green-200">Contacto</a>
        </nav>
        <div className="flex items-center">
          <button onClick={onCartClick} className="flex items-center hover:text-green-200">
            <ShoppingCart className="w-6 h-6 mr-1" />
            <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">{cartItemCount}</span>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-green-700 px-4 py-2">
          <a href="#" className="block py-2 hover:text-green-200">Inicio</a>
          <a href="#" className="block py-2 hover:text-green-200">Productos</a>
          <a href="#" className="block py-2 hover:text-green-200">Sobre Nosotros</a>
          <a href="#" className="block py-2 hover:text-green-200">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;