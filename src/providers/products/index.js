import { createContext, useState } from "react";
import api from "../../services/api";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    api
      .get("/books/v1/volumes?q=harry+potter/")
      .then((response) => setProducts(response.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
