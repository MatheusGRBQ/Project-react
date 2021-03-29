import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList";
import "./App.css";

let idAcc = 0;
  const generateId = () => {
    idAcc = idAcc + 1;
    return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
};
  
  setTasks((existingTasks) => {
    return [...existingTasks, newTask];
  });
};

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state};
        } else {
          return task;
        }
      })
    });

  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList 
          title="Pendentes" 
          onAddTask={addTask}
          taskState="Pendentes"
          tasks={tasks.filter((t) => t.state === "Pendentes")} 
          onTaskUpdate={updateTask} 
        />
        <TaskList 
          title="Fazendo" 
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")} 
          onTaskUpdate={updateTask} 
        />
        <TaskList 
          title="Completas" 
          onAddTask={addTask}
          taskState="Completas"
          tasks={tasks.filter((t) => t.state === "Completas")} 
          onTaskUpdate={updateTask} 
        />
      </div>
    </div>
  );

}

export default App;