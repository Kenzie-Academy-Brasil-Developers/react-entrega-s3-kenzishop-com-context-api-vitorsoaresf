import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header>
      <h3>Titulo</h3>
      <div>
        <button onClick={() => history.push("/cart")}>Cart</button>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
    </header>
  );
};

export default Header;
