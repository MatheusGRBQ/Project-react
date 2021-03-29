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

  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

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
          onDeleteTask={deleteTask}
        />
        <TaskList 
          title="Fazendo" 
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList 
          title="Completa" 
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );

}

export default App;