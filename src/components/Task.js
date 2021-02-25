import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick ={() => findItem(task.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default Task;
