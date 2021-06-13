import Header from "./component/header";
import Input from "./component/input";
import TodoList from "./component/todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="text-field">
        {" "}
        <Input />
      </div>
      <div className="todo-list">
        {" "}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
