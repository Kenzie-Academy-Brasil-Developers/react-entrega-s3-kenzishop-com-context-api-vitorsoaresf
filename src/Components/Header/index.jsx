import { useHistory } from "react-router-dom";
import { Container, ContainerTitle, ContainerSearch } from "./styles";
import { FiHome, FiShoppingCart, FiSearch } from "react-icons/fi";
import img from "../../assets/logo.jpg";
import { useState } from "react";
import Bt from "../Bt";

const Header = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

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
        <h3>Busque pelo autor</h3>
        <div>
          <input
            placeholder=" Autor"
            onChange={(e) => setInput(e.target.value)}
          />
          <Bt>
            <FiSearch />
          </Bt>
        </div>
      </ContainerSearch>
    </Container>
  );
};

export default Header;
