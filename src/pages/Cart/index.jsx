import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import Product from "../../Components/Product";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <ul>
      {cart.map((product, index) => (
        <Product isCart key={index} product={product} />
      ))}
    </ul>
  );
};

export default Cart;
