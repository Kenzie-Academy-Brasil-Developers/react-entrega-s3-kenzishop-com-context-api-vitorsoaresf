import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@cart")) || []
  );

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (itemId) => {
    setCart(cart.filter((product) => product.id !== itemId));
  };

  localStorage.setItem("@cart", JSON.stringify(cart));
  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
