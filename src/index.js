import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const DATA = [
  { id: "todo-0", name: "hi", completed: true },
];
ReactDOM.render(
  <React.StrictMode>
    <App  tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById("root")
);
