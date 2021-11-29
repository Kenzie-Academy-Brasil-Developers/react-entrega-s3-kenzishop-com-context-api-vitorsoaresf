import { useContext } from "react";
import { ProductContext } from "../../providers/products";
import Product from "../../Components/Product";
import { Container } from "./styles";
const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Container>
  );
};

export default Home;
