import React from "react";
import "./App.css"

import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList"

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList />
      <ul className="lista">
        <li>Vamos começar</li>
        <li>Linhas teste</li>
      </ul>
      </div>
  );

}

export default App;