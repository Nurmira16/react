import axios from "axios";
import { useState, useEffect } from "react";
import { $api } from "./requester";

const AsyncFun = () => {
  //   const data = instance.get("/").then((h) => console.log(h));
  // const [state, setState] = useState([]);
  //   setState(data);
  const fetchData = async () => {
    const response = await $api.get("/");
    return response;
  };
  useEffect(() => {
    fetchData().then((data) => console.log(data));
  }, []);
  return <></>;
};
export default AsyncFun;
