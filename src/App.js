import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./style.css";

import MainPage from "./pages/MainPage";
import ExMemo from "./components/ExMemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ClassComp from "./components/ClassComp";
import AsyncFun from "./components/async";

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
      {/* <AsyncFun></AsyncFun> */}
      <MainPage></MainPage>
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
