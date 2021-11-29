import { useEffect, useState } from "react";
import { Container } from "./styles";

const Product = ({ product }) => {
  //   const { thumbnail } = product.volumeInfo.imageLinks;
  //   const [state, setState] = useState(product.volumeInfo.imageLinks);
  //   const [img, setImg] = useState("");

  const { volumeInfo } = product;
  //   const { imageLinks } = volumeInfo;

  return (
    volumeInfo &&
    volumeInfo.hasOwnProperty("imageLinks") && (
      <Container>
        <p>{volumeInfo.title}</p>
        {volumeInfo.imageLinks && (
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
        )}
        <button>Adicionar</button>
      </Container>
    )
  );
};

export default Product;
