import { useEffect, useState } from "react";
import { fetchToDos, fetchToDosById } from "./requests";
import { Link, NavLink } from "react-router-dom";

const AsyncFun = () => {
  // const params = {
  //   _limit: 2,
  //   _page: 1,
  // };
  // useEffect(() => {
  //   fetchToDos().then((data) => console.log(data));
  //   // fetchToDosById(params).then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <p>Main Page</p>
    </div>
  );
};
export default AsyncFun;
