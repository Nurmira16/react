import { useState } from "react";
import Input from "./Input";
const Form = ({ addData, currentToDo }) => {
  const [value, setvalue] = useState(
    currentToDo.title
      ? currentToDo
      : {
          title: "",
          age: "",
          id: "",
        }
  );

  const changeName = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const isEdit = currentToDo.title ? true : false;
  return (
    <>
      {Object.keys(value).map((item) => (
        <Input
          key={item}
          name={item}
          value={value[item]}
          onChange={changeName}
        ></Input>
      ))}
      <button onClick={() => addData(value)}>
        {isEdit ? "Edit" : "No data"}
      </button>
    </>
  );
};
export default Form;
