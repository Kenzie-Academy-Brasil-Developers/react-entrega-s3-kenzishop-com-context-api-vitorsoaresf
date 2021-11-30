import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { Container } from "./styles";
import Product from "../../Components/Product";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      {cart.map((product, index) => (
        <Product isCart key={index} product={product} />
      ))}
    </Container>
  );
};

export default Cart;
