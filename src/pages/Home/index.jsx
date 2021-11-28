import { useEffect, useState } from "react";
import api from "../../services/api";

const Home = () => {
  const [request, setRequest] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    api
      .get("/books/v1/volumes?q=harry+potter/")
      .then((response) => setRequest(response.data.items))
      .catch((err) => console.log(err));
  }, []);

  return <div>Home</div>;
};

export default Home;
