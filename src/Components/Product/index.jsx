import { Container } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

const Product = ({ product, isCart }) => {
  const { volumeInfo } = product;
  const { addCart, removeCart } = useContext(CartContext);

  return (
    volumeInfo &&
    volumeInfo.hasOwnProperty("imageLinks") && (
      <Container>
        <p>{volumeInfo.title}</p>
        {volumeInfo.imageLinks && (
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
        )}
        {isCart ? (
          <button onClick={() => removeCart(product.id)}>Remover</button>
        ) : (
          <button onClick={() => addCart(product)}>Adicionar</button>
        )}
      </Container>
    )
  );
};

export default Product;
