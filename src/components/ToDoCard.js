import { Component } from "react";

// const ToDoCard = ({ item, handleOpen, handleEdit, handleDelete }) => {
//   return (
//     <div className="card">
//       <p
//         className="titleItem"
//         onClick={() => handleOpen(item)}
//         key={item.title}
//       >
//         {item.title}
//       </p>
//       <p className="titleItem">{item.age}</p>
//       <div className="buttons">
//         <button onClick={() => handleOpen(item)}>
//           {" "}
//           <span className="material-symbols-outlined edit">edit</span>
//         </button>
//         <button onClick={() => handleDelete(item.id)}>
//           <span className="material-symbols-outlined delete">delete</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ToDoCard;

class ToDoCard extends Component {
  render() {
    const { item, handleOpen, handleEdit, handleDelete } = this.props;
    return (
      <div className="card">
        {" "}
        <p
          className="titleItem"
          onClick={() => handleOpen(item)}
          key={item.title}
        >
          {item.title}
        </p>
        <p className="titleItem">{item.age}</p>
        <div className="buttons">
          <button onClick={() => handleOpen(item)}>
            {" "}
            <span className="material-symbols-outlined edit">edit</span>
          </button>
          <button onClick={() => handleDelete(item.id)}>
            <span className="material-symbols-outlined delete">delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoCard;
