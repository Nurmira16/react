import { useEffect, useState } from "react";
import { fetchToDos, fetchToDosByParams } from "./requests";

const AsyncFun = () => {
  const [title, setTitle] = useState([]);

  const params = {
    _limit: 3,
    _page: 1,
  };
  useEffect(() => {
    // fetchToDosByParams(params).then((data) => console.log(data));
    fetchToDos().then(({ data }) => {
      const todolist = data.map((todo) => todo.title);
      setTitle(todolist);
    });
  }, []);
  return (
    <>
      {title.map((todo) => {
        return (
          <>
            <h1>{todo}</h1>
          </>
        );
      })}
    </>
  );
};
export default AsyncFun;
