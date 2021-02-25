import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  }; 

  const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
  }

  const clearList = () => {
        setTasks([]); //Bug doesn't clear the array properly
        console.log("Results:", tasks);
  }
  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
