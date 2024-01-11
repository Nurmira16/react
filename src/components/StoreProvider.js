import { useMemo, useState } from "react";
import { StoreContext } from "./storeContext";
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [todos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const sort = (type, search) => {
    const filteredToDo = todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    switch (type) {
      case "asc": {
        setToDos(filteredToDo.sort((a, b) => a.age - b.age));
        return;
      }
      case "des": {
        setToDos(filteredToDo.sort((a, b) => b.age - a.age));
        return;
      }
      case "letter": {
        setToDos(filteredToDo.sort((a, b) => a.title.localeCompare(b.title)));
        return;
      }
      default:
        return;
    }
  };
  const reducers = {
    sort,
  };

  const value = {
    state,
    setState,
    todos,
    setToDos,
    sort,
    inputValue,
    setInputValue,
    reducers,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreProvider;
