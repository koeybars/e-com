import { createContext, useState, useContext } from "react";

// Create a context
const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('CartProvider: addToCart', product);
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using cart context
export function useCart() {
  return useContext(CartContext);
}

// also provide a default export for compatibility
export default CartProvider;