import { createContext, useState } from "react";
import api from "../../services/api";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await api
      .get("/books/v1/volumes?q=j+r+r+tolkien")
      .then((response) =>
        setProducts(
          response.data.items.map((product) => {
            if (!product.saleInfo.hasOwnProperty("listPrice")) {
              product.saleInfo["listPrice"] = { amount: 30.15 };
            }
            return product;
          })
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
