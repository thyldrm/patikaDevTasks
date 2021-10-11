import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [todos, seTodos] = useState([]);
  const [sort, setSort] = useState("all");

  useEffect(() => {
    //console.log(todos.completed)
  }, [todos]);

  return (
    <div>
      <Form todos={todos} setTodos={seTodos} sort={sort} setSort={setSort} />
      <List todos={todos} setTodos={seTodos} sort={sort} setSort={setSort} />
    </div>
  );
}

export default Todo;
