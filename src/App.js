import React from "react";
import "./App.css"

import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <TaskList title="Atrasado"/>
      <TaskList title="Fazendo"/>
      <TaskList title="Concluido"/>
      <ul className="lista">
      </ul>
      </div>
      </div>
  );

}

export default App;