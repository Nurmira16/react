import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchToDosById } from "./requests";
import { StoreContext } from "./storeContext";

const ID = () => {
  const { id } = useParams();
  // const [todo, setToDo] = useState("");
  const { state, setState } = useContext(StoreContext);
  useEffect(() => {
    fetchToDosById(id).then(({ data }) => {
      setState(data);
    });
  }, [id]);
  console.log(state);
  // console.log(state);
  return <>IDpage:{id}</>;
};
export default ID;
