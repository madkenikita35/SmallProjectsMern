import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const AddTask = () => {
    if (input != "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const canclebtn = (i) => {
    setTodos(todos.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h1 className=" heading">To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter task"
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      <div className="ToDODIsplay">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="close-btn" onClick={() => canclebtn(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
