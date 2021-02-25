import React from "react";
import TaskList from "./TaskList";
import TaskContextProvider from "../context/TaskContext";
import "../App.css";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default App;
