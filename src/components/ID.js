import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchToDos, fetchToDosById } from "./requests";
import { StoreContext } from "./storeContext";

const ID = () => {
  const { id } = useParams();
  const [todo, setToDo] = useState({});
  const { state, setState } = useContext(StoreContext);
  useEffect(() => {
    fetchToDosById(id).then(({ data }) => {
      console.log(data);
      setToDo(data);
    });
  }, [id]);
  console.log(state);
  return <>IDpage:{id}</>;
};
export default ID;
