import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [search, set_Search] = useState("");

  const setSearch = (value) => {
    set_Search(value);
  };

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
