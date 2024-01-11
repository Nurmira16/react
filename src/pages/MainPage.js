import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ToDoList from "../components/ToDoList";
import Modal from "../components/Modal";
import { fetchToDos, fetchToDosByParams } from "../components/requests";
import { StoreContext } from "../components/storeContext";

const MainPage = () => {
  // const toDos = [
  //   { title: "dance", age: 20, id: 1 },
  //   { title: "eat", age: 10, id: 2 },
  //   { title: "sport", age: 90, id: 3 },
  // ];
  const { todos, setToDos } = useContext(StoreContext);
  console.log(todos);
  // const [todos, setToDos] = useState([]);
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
  // useEffect(() => {
  //   const list = localStorage.getItem("list");
  //   if (list) {
  //     const data = JSON.parse(list);
  //     setToDos(data);
  //   } else {
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   if (todos.length === 0) {
  //     return;
  //   }
  //   localStorage.setItem("list", JSON.stringify(todos));
  // }, [todos]);

  // list.forEach((item) => {
  //   if (!todos.find((todo) => todo.id === item.id)) {
  //     deleteData(item);
  //   }
  // });
  const [page, setPage] = useState(1);
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5&_page=${page}`)
    //   .then((response) => response.json())
    //   .then((data) => setToDos(data));

    const params = {
      _limit: 3,
      _page: page,
    };
    fetchToDosByParams(params).then(({ data }) => setToDos(data));
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
    // setPag((prev) => ({ ...prev, offset: prev.offset + pag.limit }));
  };
  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
    // setPag((prev) => ({ ...prev, offset: prev.offset - pag.limit }));
  };

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
        handleEdit={handleEdit}
        page={page}
        handleNext={handleNext}
        handlePrev={handlePrev}
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
