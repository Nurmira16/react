import { useState } from "react";
import Input from "./Input";
const Form = ({ addData, currentToDo, handleEdit, closeModal }) => {
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
  const action = () => {
    if (isEdit) {
      handleEdit(value);
      closeModal();
    } else {
      addData(value);
      closeModal();
    }
  };
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
      <button onClick={action}>{isEdit ? "Edit" : "No data"}</button>
    </>
  );
};
export default Form;
