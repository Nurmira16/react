import { useState } from "react";
import { StoreContext } from "./storeContext";

export const StoreProvider = ({ children }) => {
  const [state, setState] = useState("hey");
  const value = {
    state,
    setState,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
