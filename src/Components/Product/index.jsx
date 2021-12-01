import { Container } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Bt from "../Bt";
import toast from "react-hot-toast";

const Product = ({ product, isCart }) => {
  const { volumeInfo, saleInfo } = product;
  const { addCart, removeCart } = useContext(CartContext);
  const history = useHistory();

  return (
    volumeInfo &&
    volumeInfo.hasOwnProperty("imageLinks") && (
      <Container>
        {volumeInfo.imageLinks && (
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
        )}
        {saleInfo.listPrice && <span>R$ {saleInfo.listPrice.amount}</span>}

        <Link to={`/product/${product.id}`}>
          {volumeInfo.title.slice(0, 50)}...
        </Link>

        <p>
          {volumeInfo.authors
            ? `${
                volumeInfo.authors[0].length > 20
                  ? `${volumeInfo.authors[0].slice(0, 20)}...`
                  : volumeInfo.authors[0]
              }`
            : "Sem autor definido"}
        </p>

        {isCart ? (
          <div>
            <Bt
              onClick={() => {
                toast.success("Livro REMOVIDO do carrinho");
                removeCart(product.id);
              }}
            >
              Remover
            </Bt>
          </div>
        ) : (
          <div>
            <Bt
              onClick={() => {
                toast.success("Livro ADICIONADO no carrinho");
                addCart(product);
              }}
            >
              Adicionar
            </Bt>
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
