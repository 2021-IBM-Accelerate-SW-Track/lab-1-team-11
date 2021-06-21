import Header from "./component/header";
import Input from "./component/input";
import TodoList from "./component/todo";
import {Container} from "@material-ui/core"
import "./App.css";

function App() {
  return (

    <Container>
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
    </Container>
  );
}

export default App;
