import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Details from "../pages/Details";
import { useContext, useEffect } from "react";
import { ProductContext } from "../providers/products";

const Routes = () => {
  // FAZ A LEITURA DOS DADOS NA APLICAÇÃO MAIOR PARA EVITAR UMA NOVA
  // REQUISIÇÃO A CADA VEZ QUE UM COMPÓNENTE FOSSE ATUALIZADO.
  const { getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts("j+r+r+tolkien");
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product/:id">
        <Details />
      </Route>
    </Switch>
  );
};

export default Routes;
