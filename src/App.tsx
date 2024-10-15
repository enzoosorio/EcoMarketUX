import React, { useState } from 'react';
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from "./components/Cart";
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <InfoSection />
        <ProductList addToCart={addToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        removeItem={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Footer />
    </div>
  );
}

export default App;