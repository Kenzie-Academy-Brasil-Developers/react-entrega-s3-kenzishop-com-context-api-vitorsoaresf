import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { Container, ContainerCart, ContainerAmount } from "./styles";
import img from "../../assets/cart.svg";
import Product from "../../Components/Product";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <ContainerCart>
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
      </ContainerCart>
      {cart.length !== 0 && (
        <ContainerAmount>
          <div>
            <header>
              <p>Resumo do Pedido</p>
            </header>
            <section>
              <p>{cart.length} Pedidos</p>
              <span>
                R$
                {cart
                  .reduce(
                    (acc, book) => (acc += book.saleInfo.listPrice.amount),
                    0
                  )
                  .toFixed(2)}
              </span>
            </section>
          </div>
        </ContainerAmount>
      )}
    </Container>
  );
};

export default Cart;
