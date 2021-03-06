import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";
import TaskContextProvider from "../context/TaskContext";
import "../App.css";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default App;
