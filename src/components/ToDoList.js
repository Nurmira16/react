import ToDoCard from "./ToDoCard";

const ToDoList = ({ toDos, deleteData, handleOpen, handleEdit }) => {
  return (
    <div className="cards">
      {toDos.map((item) => (
        <ToDoCard
          key={item.id}
          handleOpen={() => handleOpen(item)}
          item={item}
          handleDelete={deleteData}
          handleEdit={handleEdit}
        ></ToDoCard>
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
