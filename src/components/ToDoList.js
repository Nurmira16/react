const ToDoList = ({ toDos, handleDelete, handleOpen }) => {
  return (
    <div>
      {toDos.map((item) => (
        <p onClick={() => handleOpen(item)} key={item.title}>
          {item.id}
        </p>
      ))}
    </div>
  );
};

export default ToDoList;

/* <div>
      {lists.map((item, i) => (
        <p key={item.id}> {item.title}</p>
      ))}
    </div> */
