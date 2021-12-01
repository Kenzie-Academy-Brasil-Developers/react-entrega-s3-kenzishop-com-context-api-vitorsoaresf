import { useParams } from "react-router-dom";
import { ProductContext } from "../../providers/products";
import { useContext } from "react";
import { Container } from "./styles";
import {
  FiBookOpen,
  FiGlobe,
  FiShoppingBag,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import Bt from "../../Components/Bt";
import { useHistory } from "react-router-dom";

const Details = () => {
  const { products } = useContext(ProductContext);
  const params = useParams();
  const { volumeInfo, saleInfo } = products.find(
    (product) => product.id === params.id
  );
  const history = useHistory();

  return (
    <Container>
      <img src={volumeInfo.imageLinks.thumbnail} alt="" />
      <h3>{volumeInfo.title}</h3>
      <hr />
      <section className="description">
        <header>Descrição</header>
        <p>{volumeInfo.description}</p>
      </section>
      <hr />
      <section className="info">
        {/* <header>Informações</header> */}
        <div>
          <span>Páginas</span>
          <p>
            <FiBookOpen /> {volumeInfo.pageCount} páginas
          </p>
        </div>
        <div>
          <span>Editora</span>

          <p>
            <FiUsers /> {volumeInfo.publisher}
          </p>
        </div>
        <div>
          <span>Ano Publicação</span>

          <p>
            <FiCalendar /> {volumeInfo.publishedDate}
          </p>
        </div>
        <div>
          <span>Categoria</span>

          <p>
            <FiShoppingBag /> {volumeInfo.categories}
          </p>
        </div>
        <div>
          <span>País</span>

          <p>
            <FiGlobe /> {saleInfo.country}/ idioma-{volumeInfo.language}
          </p>
        </div>
      </section>
      <Bt onClick={() => history.push("/")}>Voltar</Bt>
    </Container>
  );
};

export default Details;
