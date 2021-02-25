import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

  const initialState = JSON.parse(localStorage.getItem('TaskList')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]); //Bug doesn't clear the array properly
    console.log("Results:", tasks);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  useEffect(() => {
        localStorage.setItem('TaskList', JSON.stringify(tasks));

  },[tasks])
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
