import { useState, useEffect } from "react";

const initialFormValues = { todo: "", completed: false };

function Form({ setTodos, todos, sort, setSort }) {
  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }
    setTodos([...todos, form]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="What to do ?"
          name="todo"
          onChange={onChangeInput}
          value={form.todo}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
