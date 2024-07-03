import React, { useState } from "react";
import "./css/style.css";
import { Todo } from "./Todo";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value)
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="todo-input"
          placeholder="What is the task today?"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}
