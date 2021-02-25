import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <ul className="list">
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
