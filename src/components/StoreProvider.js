import { useState } from "react";
import { StoreContext } from "./storeContext";
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({});
  const value = {
    state,
    setState,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreProvider;
