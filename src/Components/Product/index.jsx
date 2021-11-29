import { Container } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Bt from "../Bt";

const Product = ({ product, isCart }) => {
  const { volumeInfo, saleInfo } = product;
  const { addCart, removeCart } = useContext(CartContext);
  const history = useHistory();

  return (
    volumeInfo &&
    volumeInfo.hasOwnProperty("imageLinks") && (
      <Container>
        <h3>{volumeInfo.title}</h3>
        {volumeInfo.imageLinks && (
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
        )}
        <p>{volumeInfo.authors[0]}</p>
        {/* <details>
          <summary>Resumo</summary>
          <p>{volumeInfo.description}</p>
        </details> */}

        {saleInfo.listPrice && <span>R$ {saleInfo.listPrice.amount}</span>}
        {isCart ? (
          <Bt onClick={() => removeCart(product.id)}>Remover</Bt>
        ) : (
          <div>
            <Bt onClick={() => addCart(product)}>Adicionar</Bt>
            <Bt onClick={() => history.push(`/product/${product.id}`)}>
              Detalhes
            </Bt>
          </div>
        )}
      </Container>
    )
  );
};

export default Product;
