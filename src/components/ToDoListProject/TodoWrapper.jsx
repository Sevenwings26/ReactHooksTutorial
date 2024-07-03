import React, { useState } from "react";
import TodoForm from "./TodoForm";

// install uuid --- npm install uuid
import {v4 as uuidv4 } from "uuid";
uuidv4();

import { Todo } from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);console.log(todos)
  };

  return (
    <div className="todo-wrapper">
      < TodoForm addTodo = {addTodo} />
      <Todo/>
    </div>
  );
}

export default TodoWrapper;
