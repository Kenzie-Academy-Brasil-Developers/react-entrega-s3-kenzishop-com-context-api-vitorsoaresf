import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerTitle,
  ContainerSearch,
  ContainerLoading,
} from "./styles";
import { FiHome, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { SearchContext } from "../../providers/search";
import { CartContext } from "../../providers/cart";
import { ProductContext } from "../../providers/products";
import { toast } from "react-hot-toast";
import img from "../../assets/logo.jpg";
import Bt from "../Bt";

const Header = () => {
  const history = useHistory();
  const { search, setSearch } = useContext(SearchContext);
  const { getProducts } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const onSearch = () => {
    setLoading(true);
    getProducts(search)
      .then((_) => {
        toast.success("Autor(a) / Obra encontrado(a)");
        setLoading(false);
      })
      .catch((_) => {
        toast.error("Autor(a) / Obra não encontrado(a)");
        setLoading(false);
      });
    history.push("/");
  };

  return (
    <>
      {loading && <ContainerLoading>Carregando...</ContainerLoading>}
      <Container>
        <ContainerTitle>
          <section className="container_logo">
            <img src={img} alt="logo-ka" />
            <h3>Biblioteca</h3>
          </section>
          <section className="container_bt">
            <button onClick={() => history.push("/")}>
              <FiHome />
            </button>
            <button onClick={() => history.push("/cart")}>
              <FiShoppingCart />
              {cart.length > 0 && <span>{cart.length}</span>}
            </button>
          </section>
        </ContainerTitle>
        <ContainerSearch>
          <h3>Busque pelo Autor / Obra</h3>
          <div>
            <input
              placeholder=" Autor / obra"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Bt onClick={() => onSearch()}>
              <FiSearch />
            </Bt>
          </div>
        </ContainerSearch>
      </Container>
    </>
  );
};

export default Header;
