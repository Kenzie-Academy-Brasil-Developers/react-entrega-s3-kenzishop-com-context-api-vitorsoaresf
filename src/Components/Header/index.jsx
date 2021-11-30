import { useHistory } from "react-router-dom";
import { Container, ContainerTitle, ContainerSearch } from "./styles";
import { FiHome, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { SearchContext } from "../../providers/search";
import { ProductContext } from "../../providers/products";
import { toast } from "react-hot-toast";
import img from "../../assets/logo.jpg";
import Bt from "../Bt";

const Header = () => {
  const history = useHistory();
  const { search, setSearch } = useContext(SearchContext);
  const { getProducts } = useContext(ProductContext);

  const onSearch = () => {
    getProducts(search)
      .then((_) => toast.success("Autor(a) / Obra encontrado(a)"))
      .catch((_) => toast.error("Autor(a) / Obra não encontrado(a)"));
    history.push("/");
  };

  return (
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
  );
};

export default Header;
