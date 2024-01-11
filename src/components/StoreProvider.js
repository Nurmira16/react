import { useState } from "react";
import { StoreContext } from "./storeContext";
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [todos, setToDos] = useState([]);
  const value = {
    state,
    setState,
    todos,
    setToDos,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreProvider;
