import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../providers/products";
import Product from "../../Components/Product";
import api from "../../services/api";
const Home = () => {
  // const [request, setRequest] = useState([]);
  // const [count, setCount] = useState(0);
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <ul>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  );
};

export default Home;
