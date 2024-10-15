import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Botella Reutilizable",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Botella de acero inoxidable, perfecta para reducir el uso de plástico."
  },
  {
    id: 2,
    name: "Bolsa de Compras Ecológica",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1597836228748-b0cf58ec28e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Bolsa de algodón orgánico, resistente y lavable."
  },
  {
    id: 3,
    name: "Set de Cubiertos de Bambú",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Set de cubiertos de bambú, incluye tenedor, cuchara, cuchillo y pajita."
  },
  {
    id: 4,
    name: "Jabón Orgánico",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Jabón artesanal hecho con ingredientes 100% naturales y orgánicos."
  },
];

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">Nuestros Productos Sostenibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">S/ {product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;