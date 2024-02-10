import React, { useState } from "react";

const FormControl = ({ addTo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTo(task);
    console.log(task);
    setTask("");
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg w-250"
            type="text"
            value={task}
            placeholder="What is the task today?"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-secondary btn-lg text-white mb-1 ml-1"
          >
            add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormControl;
