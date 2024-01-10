import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchToDos, fetchToDosById } from "./requests";

const ID = () => {
  const { id } = useParams();
  const [todo, setToDo] = useState({});
  useEffect(() => {
    fetchToDosById(id).then(({ data }) => {
      console.log(data);
      setToDo(data);
    });
  }, []);
  console.log(todo);
  return <>IDpage:{id}</>;
};
export default ID;
