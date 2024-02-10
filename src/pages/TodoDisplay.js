import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const TodoDisplay = ({ task, onDelete }) => {
  const handleClick = () => {
    onDelete(task.id);
  };
  return (
    <div className="container">
      <div className="row bg-white">
        <div className="col mt-2 bg-dark">
          <p className="text-white">{task.task}</p>
        </div>
        <div className="col text-white mt-2 bg-dark">
          <button className="btn bg-dark" onClick={handleClick}>
            {" "}
            <FaRegTrashAlt className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDisplay;
