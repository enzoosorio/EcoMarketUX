import React from 'react';
import { Leaf, ShoppingBag, Users, Heart } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Compra Sostenible, Impacto Positivo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard
          icon={<Leaf className="w-12 h-12 text-green-500" />}
          title="Reducimos el Impacto Ambiental"
          description="Nuestros productos y prácticas están diseñados para minimizar la huella ecológica de tus compras online."
        />
        <InfoCard
          icon={<ShoppingBag className="w-12 h-12 text-green-500" />}
          title="Fomentamos el Consumo Responsable"
          description="Te ofrecemos alternativas sostenibles para tus necesidades diarias, promoviendo un estilo de vida más consciente."
        />
        <InfoCard
          icon={<Users className="w-12 h-12 text-green-500" />}
          title="Apoyamos a Productores Locales"
          description="Colaboramos con proveedores y artesanos locales que comparten nuestra visión de sostenibilidad."
        />
        <InfoCard
          icon={<Heart className="w-12 h-12 text-green-500" />}
          title="Generamos Impacto Social"
          description="Cada compra contribuye a proyectos sociales y ambientales, creando un círculo virtuoso de bienestar."
        />
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default InfoSection;