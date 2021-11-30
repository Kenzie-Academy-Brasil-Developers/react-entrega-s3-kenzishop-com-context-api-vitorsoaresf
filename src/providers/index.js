import { ProductProvider } from "./products";
import { CartProvider } from "./cart";
import { SearchProvider } from "./search";

const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>
        <SearchProvider>{children}</SearchProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default Providers;
