import { useState } from "react";

function List({ todos, setTodos, sort, setSort }) {
  
  const deleteTodos = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const completeTodo = (i) => {
    const newTodos = [...todos];

    if (newTodos[i].completed === false) {
      newTodos[i].completed = true;
    } else {
      newTodos[i].completed = false;
    }

    setTodos(newTodos);
  };

  const clearAll = () => {
    const newTodos = todos.filter((todo) => {
      return todo.completed === false;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      Hepsini Seç
      <input
        type="checkbox"
        onChange={(e) => {
          //console.log(e.target.checked)
          let checked = e.target.checked;
          setTodos(
            todos.map((d) => {
              d.completed = checked;
              return d;
            })
          );
        }}
      />
      <ul>
        {todos.length > 0 && sort === "active"
          ? todos.map((t, i) => {
              return (
                t.completed === false && (
                  <li key={i}>
                    <span
                      style={{
                        textDecoration: t.completed ? "line-through" : "",
                      }}
                      onClick={() => completeTodo(i)}
                    >
                      {t.todo}
                    </span>
                    <i
                      onClick={() => deleteTodos(i)}
                      className="far fa-times-circle"
                    ></i>
                  </li>
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "completed"
          ? todos.map((t, i) => {
              return (
                t.completed === true && (
                  <li key={i}>
                    <span
                      style={{
                        textDecoration: t.completed ? "line-through" : "",
                      }}
                      onClick={() => completeTodo(i)}
                    >
                      {t.todo}
                    </span>
                    <i
                      onClick={() => deleteTodos(i)}
                      className="far fa-times-circle"
                    ></i>
                  </li>
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "all"
          ? todos.map((t, i) => {
              return (
                <li key={i}>
                  <span
                    style={{
                      textDecoration: t.completed ? "line-through" : "",
                    }}
                    onClick={() => completeTodo(i)}
                  >
                    {t.todo}
                  </span>
                  <i
                    onClick={() => deleteTodos(i)}
                    className="far fa-times-circle"
                  ></i>
                </li>
              );
            })
          : null}
        <div>
          <h4 style={{ color: "red", display: "inline" }}>Todos left:</h4>
          {todos.filter((todo) => !todo.completed).length}
        </div>
      </ul>
      <button onClick={() => setSort("all")}>All</button>
      <button onClick={() => setSort("active")}>Active</button>
      <button onClick={() => setSort("completed")}>Completed</button>
      {todos.some((todo) => !todo.complete) ? (
        <button onClick={clearAll}>Clear</button>
      ) : null}
    </div>
  );
}

export default List;
