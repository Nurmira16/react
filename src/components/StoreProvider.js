import { useMemo, useState } from "react";
import { StoreContext } from "./storeContext";
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [todos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const sort = useMemo(
    (type, inputValue) => {
      const filteredToDo = todos.filter((todo) =>
        todo.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      switch (type) {
        case "asc": {
          return filteredToDo.sort((a, b) => a.age - b.age);
        }
        case "des": {
          return filteredToDo.sort((a, b) => b.age - a.age);
        }
        case "letter": {
          return filteredToDo.sort((a, b) => a.title.localeCompare(b.title));
        }
        default:
          return filteredToDo;
      }
    },
    [inputValue]
  );

  const value = {
    state,
    setState,
    todos,
    setToDos,
    sort,
    inputValue,
    setInputValue,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreProvider;
