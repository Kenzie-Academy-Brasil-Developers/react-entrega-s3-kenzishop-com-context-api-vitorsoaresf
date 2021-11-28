import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../providers/products";
import api from "../../services/api";

const Home = () => {
  // const [request, setRequest] = useState([]);
  // const [count, setCount] = useState(0);
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.volumeInfo.title}</li>
      ))}
    </ul>
  );
};

export default Home;
