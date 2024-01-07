import { useEffect, useState } from "react";
import { useMemo, memo } from "react";

const ExMemo = ({ log, result }) => {
  useEffect(() => {
    log("Render");
  }, [log]);

  return (
    <>
      <h1>Hello {result}</h1>
    </>
  );
};
export default memo(ExMemo);

// const Child = ({ sendData }) => {
//   const sendMessage = () => {
//     sendData("hey");
//   };
//   return (
//     <>
//       <button onClick={sendMessage}>Send</button>
//     </>
//   );
// };
// export default Child;
