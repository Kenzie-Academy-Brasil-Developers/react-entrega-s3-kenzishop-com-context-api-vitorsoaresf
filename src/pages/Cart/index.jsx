import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { Container } from "./styles";
import img from "../../assets/cart.svg";
import Product from "../../Components/Product";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      {cart.length === 0 ? (
        <div>
          <p>Seu carrinho está vazio</p>
          <img src={img} alt="cart_img" />
        </div>
      ) : (
        cart.map((product, index) => (
          <Product isCart key={index} product={product} />
        ))
      )}
    </Container>
  );
};

export default Cart;
