import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import classes from "../style.module.css";
import { classNames } from "./helper";
import Input from "../ui/inputs";
import Example, { useSort } from "./hooks";
import SumComponent from "./sumComponent";
import Hoc from "./Hoc";

const ToDoList = ({ toDos, deleteData, handleOpen, handleEdit }) => {
  const types = ["asc", "des", "letter"];

  const [type, setType] = useState("asc");
  const [inputValue, setInputValue] = useState("");
  // const [filteredList, setFilteredList] = useState([]);
  // useEffect(() => {
  //   const filteredToDo = toDos.filter((todo) =>
  //     todo.title.toLowerCase().includes(inputValue)
  //   );
  //   setFilteredList(filteredToDo);
  // }, [inputValue, toDos]);
  const sort = (type) => {
    const filteredToDo = toDos.filter((todo) =>
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
  const [pag, setPag] = useState({
    limit: 2,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  const handlePrev = () => {
    if (pag.offset === 0) return;
    setPag((prev) => ({ ...prev, offset: prev.offset - prev.limit }));
    setPage(page - 1);
  };
  const handleNext = () => {
    setPag((prev) => ({ ...prev, offset: prev.offset + prev.limit }));
    setPage(page + 1);
  };
  const countPages = Math.ceil(sort(type).length / pag.limit);
  console.log(countPages, sort(type).length);

  return (
    <>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
      <Hoc Component={SumComponent}></Hoc>

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
        {sort(type)
          .slice(pag.offset, pag.offset + pag.limit)
          .map((item) => (
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
      {page + " / " + countPages}
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
