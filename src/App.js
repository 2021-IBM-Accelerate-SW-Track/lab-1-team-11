import Header from "./component/header";
import Input from "./component/input";
import TodoList from "./component/todo";
import {Container} from "@material-ui/core"
import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function deleteT(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function editT(id, Edited) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        //
        return {...task, name: Edited}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const taskList = tasks.map(task => (
    <TodoList
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteT={deleteT}
        editT={editT}
      />
    )
  );
  return (
    <div className="App">
      <Header />
      <div className="text-field">
        {" "}
        <Input addTask={addTask} />
      </div>
      <div className="todo-list">
        {" "}
        <ul>{taskList}</ul>
      </div>
    </div>
  );
}

export default App;
