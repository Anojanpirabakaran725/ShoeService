import React, { createContext, FC, useState } from "react";

export type SearchContextState = {
  //1. Typ vom Context definieren
  search: string;
  addSearch: (searchInput: string) => void;
};

const contextDefaultValues: SearchContextState = {
  //2. Einen Standart Context bestimmen
  search: "",
  addSearch: () => {},
};

export const SearchContext =
  createContext<SearchContextState>(contextDefaultValues); //3. Context Objekt erstellen

const SearchProvider: FC = ({ children }) => {
  //4. Context Functional Component definieren

  const [search, setSearch] = useState<string>(contextDefaultValues.search); //5. Context Variablen definieren
  const addSearch = (newSearch: string) => setSearch(newSearch.toLowerCase()); //6. Wrapper Funktion über den set
  // ...todos = array durchiterieren und danach die einzelnen Elemente in newTodo speichern --> Vereinfachung von Sprachkonstruktor

  return (
    //Nun hat Context Provider die Werte, die wir als Children brauchen können
    <SearchContext.Provider value={{ search, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
