import { ProductProvider } from "./products";

const Providers = ({ children }) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;
