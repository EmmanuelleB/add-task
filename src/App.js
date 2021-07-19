import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Task from "./components/task/Task";



function App() {
  const [tasks, setTasks]= useState([]);
  const [newTask, setNewTask]=useState("");
  return (
    <div>
      <Task tasks={tasks} setTasks={setTasks}/>
      <Form newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks}/>
    </div>
  )

}

export default App;
