import { useParams } from "react-router-dom";
import { ProductContext } from "../../providers/products";
import { useContext } from "react";
import { Container } from "./styles";

const Details = () => {
  const { products } = useContext(ProductContext);
  const params = useParams();
  const { volumeInfo } = products.find((product) => product.id === params.id);
  console.log(volumeInfo);
  return (
    <Container>
      <h3>{volumeInfo.title}</h3>
      <img src={volumeInfo.imageLinks.thumbnail} alt="" />
      <p>{volumeInfo.description}</p>
      <p>Numero das Páginas : {volumeInfo.pageCount}</p>
      <p>Editora: {volumeInfo.publisher}</p>
      <p>Ano publicação: {volumeInfo.publishedDate}</p>
      <p>Categoria: {volumeInfo.categories}</p>
      {/* <details>
          <summary>Resumo</summary>
          <p>{volumeInfo.description}</p>
        </details> */}
    </Container>
  );
};

export default Details;
