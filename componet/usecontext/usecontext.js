import React, { createContext, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [nameItem, setNameItem] = useState("");
  const [arrayProfileItem, setArrayProfileItem] = useState("");

  return (
    <ItemContext.Provider value={{ nameItem, setNameItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
