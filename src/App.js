import React, { useState } from "react";
import "./style.css";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";
import Modal from "./components/Modal";

function App() {
  const toDos = [
    { title: "dance", age: 20, id: 1 },
    { title: "eat", age: 10, id: 2 },
    { title: "sport", age: 90, id: 3 },
  ];
  const [todos, setToDos] = useState(toDos);
  const [isShow, setIsShow] = useState(false);
  const [currentToDo, setCurrentToDo] = useState({});

  const addData = (data) => {
    const newToDo = [...todos, { ...data, id: Date.now() }];
    setToDos(newToDo);
  };
  const deleteData = (id) => {
    const newToDo = todos.filter((todo) => todo.id !== id);

    setToDos(newToDo);
  };

  // Modal
  const handleOpen = (todo) => {
    setIsShow(true);
    setCurrentToDo(todo);
  };
  console.log(currentToDo);
  return (
    <div className="App">
      <Title size={50}>ToDo List</Title>
      <button onClick={() => setIsShow(true)}>Show Modal</button>
      <ToDoList
        handleOpen={handleOpen}
        deleteData={deleteData}
        toDos={todos}
      ></ToDoList>
      {isShow && (
        <Modal
          currentToDo={currentToDo}
          addData={addData}
          closeModal={() => setIsShow(false)}
        ></Modal>
      )}
    </div>
  );
}

export default App;
