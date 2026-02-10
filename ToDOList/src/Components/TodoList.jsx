import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const AddTask = () => {
    setTodos([...todos, input]);
  };

  return (
    <div>
      <h1 className="heading">To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter task"
      />
      <button onClick={AddTask}>Add</button>
      <div className="ToDODIsplay">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
