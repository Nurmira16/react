import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import classes from "../style.module.css";
import { classNames } from "./helper";

const ToDoList = ({ toDos, deleteData, handleOpen, handleEdit }) => {
  const types = ["asc", "des", "letter"];
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
  const [type, setType] = useState("asc");
  const handleType = (type) => {
    localStorage.setItem("type", type);
    setType(type);
  };
  useEffect(() => {
    if (!type) return;
    setType(localStorage.getItem("type"));
  }, []);

  return (
    <>
      {types.map((element) => (
        <button
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
        {sort(type).map((item) => (
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
