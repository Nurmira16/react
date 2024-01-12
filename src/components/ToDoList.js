import { useContext, useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import classes from "../style.module.css";
import { classNames } from "./helper";
import Input from "../ui/inputs";
import Example, { useSort } from "./hooks";
import SumComponent from "./sumComponent";
import Hoc from "./Hoc";
import { StoreContext } from "./storeContext";

const ToDoList = ({
  deleteData,
  handleOpen,
  handleEdit,
  page,
  handleNext,
  handlePrev,
}) => {
  const { todos, sort, inputValue, setInputValue, reducers, store } =
    useContext(StoreContext);
  const types = ["asc", "des", "letter"];

  const [type, setType] = useState("asc");
  // const [inputValue, setInputValue] = useState("");
  // const [filteredList, setFilteredList] = useState([]);
  // useEffect(() => {
  //   const filteredToDo = toDos.filter((todo) =>
  //     todo.title.toLowerCase().includes(inputValue)
  //   );
  //   setFilteredList(filteredToDo);
  // }, [inputValue, toDos]);

  // console.log(sort(type));
  const handleType = (type) => {
    localStorage.setItem("type", type);
    setType(type);
  };
  useEffect(() => {
    if (!type) return;
    setType(localStorage.getItem("type"));
  }, []);
  console.log(store);
  if (store === "pending") {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }
  // const { sortedArray, old } = useSort(toDos, type);
  // const [pag, setPag] = useState({ limit: 2, offset: 0 });

  // const countPages = Math.ceil(sort(type).length / pag.limit);
  const handleChangeValue = (e) => {
    reducers.sort(type, e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <>
      <Input value={inputValue} onChange={handleChangeValue}></Input>
      {/* <Hoc Component={SumComponent}></Hoc> */}

      {/* <SumComponent
        render={(sum1, sum2) => {
          return (
            <h1 onClick={() => console.log(sum1, sum2)}>
              {sum1}+{sum2}={sum1 + sum2}
            </h1>
          );
        }}
      ></SumComponent> */}
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
        {todos.map((item) => (
          <ToDoCard
            key={item.id}
            handleOpen={() => handleOpen(item)}
            item={item}
            handleDelete={deleteData}
            handleEdit={handleEdit}
          ></ToDoCard>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      {page}
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default ToDoList;

/* <div>
      {lists.map((item, i) => (
        <p key={item.id}> {item.title}</p>
      ))}
    </div> */
