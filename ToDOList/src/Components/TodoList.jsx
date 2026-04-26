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
      <div className=" ToDODIsplay ">
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

// // import React, { useState } from "react";

// // const TodoList = () => {
// //   const [task, setTask] = useState([]);
// //   const [input, setInput] = useState("");

// //   const handleInput = (e) => {
// //     setInput(e.target.value);
// //   };

// //   const addTask = () => {
// //     setTask([...task, input]);
// //     setInput("");
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         name="task"
// //         placeholder="Add"
// //         value={input}
// //         onChange={handleInput}
// //       />
// //       <button onClick={addTask}>Add Task</button>
// //       <div>
// //         {task.map((task, index) => (
// //           <div key={index}>
// //             <p>{task}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TodoList;
