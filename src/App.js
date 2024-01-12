import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./style.css";

import MainPage from "./pages/MainPage";
import ExMemo from "./components/ExMemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ClassComp from "./components/ClassComp";
import AsyncFun from "./components/async";
import { NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AbouPage";
import ID from "./components/ID";
import { routes } from "./components/routes";
import AppRoutes from "./components/AppRoute";

function App() {
  const [value, setValue] = useState("");
  const log = useCallback((title) => {
    console.log(title);
  }, []);
  const amount = (a, b) => {
    return a + b;
  };
  // useEffect(() => {
  //   throw new Error();
  // }, []);
  const [math, setMath] = useState({ a: 3, b: 4 });
  // const result = useMemo(() => {
  //   return amount(math.a, math.b);
  // }, []);
  const [show, setShow] = useState(true);
  const result = amount(math.a, math.b);
  return (
    <>
      {/* <NavLink to={"/about"}>to About Page</NavLink>
      <NavLink to={"/"}>to Main Page</NavLink>
      <AppRoutes></AppRoutes> */}
      {/* <AsyncFun></AsyncFun> */}
      {/* <MainPage></MainPage> */}
    </>
    // <>
    //   <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    //   <ExMemo result={result} log={log}></ExMemo>
    // </>
    // <button onClick={() => setShow(!show)}>Change</button>
    // {show && <ClassComp />}
  );
}

export default App;
