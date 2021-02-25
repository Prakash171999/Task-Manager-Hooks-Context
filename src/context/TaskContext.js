import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = props => {

      const [ tasks, setTasks ] = useState([
            {task:"Read the book", id:1},
            {task:"Complete the task", id:2},
            {task:"Go to Gym", id:3},
      ]);
      return(
            <TaskContext.Provider value={{tasks}}>
                  {props.children}
            </TaskContext.Provider>
      );
}

export default TaskContextProvider;