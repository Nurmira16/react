import { type } from "@testing-library/user-event/dist/type";
import ToDoCard from "./ToDoCard";
import { useEffect, useState } from "react";

const ToDoList = ({ toDos, deleteData, handleOpen, handleEdit }) => {
  useEffect(() => {
    localStorage.setItem("type", type);
  }, [type]);
  return (
    <>
      <button>Asc</button>
      <button>Desc</button>
      <div className="cards">
        {toDos.map((item) => (
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
