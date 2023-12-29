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
  const deleteData = (data) => {
    const newToDo = todos.filter((todo) => todo.id !== data.id);

    setToDos(newToDo);
  };

  const handleEdit = (todo) => {
    setToDos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return todo;
        } else {
          return item;
        }
      })
    );
  };
  const closeModal = () => {
    setIsShow(false);
    setCurrentToDo([]);
  };

  // Modal
  const handleOpen = (todo) => {
    setIsShow(true);
    setCurrentToDo(todo);
  };

  return (
    <div className="App">
      <div className="title">
        <Title size={40}>ToDo List</Title>
        <button onClick={() => setIsShow(true)}>Show Modal</button>
      </div>
      <ToDoList
        handleOpen={handleOpen}
        deleteData={deleteData}
        toDos={todos}
        handleEdit={handleEdit}
      ></ToDoList>
      {isShow && (
        <Modal
          handleEdit={handleEdit}
          currentToDo={currentToDo}
          addData={addData}
          closeModal={closeModal}
        ></Modal>
      )}
    </div>
  );
}

export default App;
