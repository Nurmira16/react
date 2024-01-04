import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import classes from "../style.module.css";
import { classNames } from "./helper";
import Input from "../ui/inputs";
import Example, { useSort } from "./hooks";

const ToDoList = ({ toDos, deleteData, handleOpen, handleEdit }) => {
  const types = ["asc", "des", "letter"];

  const [type, setType] = useState("asc");
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    const filteredToDo = toDos.filter((todo) =>
      todo.title.toLowerCase().includes(inputValue)
    );
    setFilteredList(filteredToDo);
  }, [inputValue, toDos]);
  const sort = (type) => {
    switch (type) {
      case "asc":
        return toDos.sort((a, b) => a.age - b.age);
      case "des":
        return toDos.sort((a, b) => b.age - a.age);
      case "letter":
        return toDos.sort((a, b) => a.title.localeCompare(b.title));
    }
  };
  // console.log(sort(type));
  const handleType = (type) => {
    localStorage.setItem("type", type);
    setType(type);
  };
  useEffect(() => {
    if (!type) return;
    setType(localStorage.getItem("type"));
  }, []);
  const { sortedArray, old } = useSort(toDos, type);

  return (
    <>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>

      {types.map((element) => (
        <button
          key={element}
          className={classNames(
            classes.buttonActive,
            classes.button,
            element === type
          )}
          onClick={() => handleType(element)}
        >
          {element}
        </button>
      ))}

      {/* <button
        className={type === "asc" && classes.buttonActive}
        onClick={() => handleType("asc")}
      >
        Asc
      </button>
      <button onClick={() => handleType("des")}>Desc</button>
      <button onClick={() => handleType("letter")}>Letter</button> */}
      <div className="cards">
        {filteredList.map((item) => (
          <ToDoCard
            key={item.id}
            handleOpen={() => handleOpen(item)}
            item={item}
            handleDelete={deleteData}
            handleEdit={handleEdit}
          ></ToDoCard>
        ))}
      </div>
    </>
  );
};

export default ToDoList;

/* <div>
      {lists.map((item, i) => (
        <p key={item.id}> {item.title}</p>
      ))}
    </div> */
