import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle(""); //function not working, needs debugging
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task Here"
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button onClick={clearList} className="btn clear-btn"
        >
            Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
