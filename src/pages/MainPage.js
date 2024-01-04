import { useEffect, useState } from "react";
import Title from "../components/Title";
import ToDoList from "../components/ToDoList";
import Modal from "../components/Modal";

const MainPage = () => {
  // const toDos = [
  //   { title: "dance", age: 20, id: 1 },
  //   { title: "eat", age: 10, id: 2 },
  //   { title: "sport", age: 90, id: 3 },
  // ];
  const [todos, setToDos] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [currentToDo, setCurrentToDo] = useState({});

  const addData = (data) => {
    const newToDo = [...todos, { ...data, id: Date.now() }];
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
  const sort = (todos) => {
    setToDos([...todos].sort((a, b) => a.age - b.age));
  };
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   if (count === 5) return;
  //   const timeoutId = setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //     console.log("increasing");
  //   }, 1500);
  //   return () => clearInterval(timeoutId);
  // }, [count]);

  // useEffect(() => {
  //   const list = JSON.parse(localStorage.getItem("list"));
  //   setToDos(list);
  // }, []);

  // useEffect(() => {
  //   const storedList = localStorage.getItem("list");
  //   if (storedList) {
  //     const list = JSON.parse(storedList);
  //     setToDos(list);
  //   }
  // }, []);

  const deleteData = (id) => {
    const newToDo = todos.filter((todo) => todo.id !== id);
    if (newToDo.length === 0) {
      localStorage.setItem("list", JSON.stringify(newToDo));
    }
    setToDos(newToDo);
  };
  useEffect(() => {
    const list = localStorage.getItem("list");
    if (list) {
      const data = JSON.parse(list);
      setToDos(data);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (todos.length === 0) {
      return;
    }
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  // list.forEach((item) => {
  //   if (!todos.find((todo) => todo.id === item.id)) {
  //     deleteData(item);
  //   }
  // });

  return (
    <div className="App">
      <div className="title">
        <Title size={40}>Package</Title>
        <div className="mainButtons">
          <button onClick={() => setIsShow(true)}>Create task</button>
          <button onClick={() => sort(todos)}>Sort</button>
        </div>
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
};
export default MainPage;
