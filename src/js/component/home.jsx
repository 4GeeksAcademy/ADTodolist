import React from "react";
import { useState } from "react";
import "./app.css";

//create your first component
function TodoItem({ label, is_done, delete_todo, toggle_todo }) {
  return (
    <div className="todoitem">
      <input type="checkbox" checked={is_done} onChange={toggle_todo} />
      <span className="todotext">{label}</span>
      <button type="button" className="btn btn-danger" onClick={delete_todo}>
        Complete
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    // {label: "Buy some tuna", is_done: false},
    // {label: "Feed the cats", is_done: false},
  ]);
  const [todoInput, setTodoInput] = useState("");
  // const [item, setItem] = useState ({
  // 	label: "Buy some tuna cans."
  // 	is.done: false,
  // });

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (todoInput.length > 0) {
            setTodos([
              {
                label: todoInput,
                is_done: false,
              },
              ...todos,
            ]);
            setTodoInput("");
          }
        }}
        className="container d-flex flex-column align-items-center justify-content-start"
      >
        <h1>To Do List</h1>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="What do you want to get done today?"
          aria-label="input field"
          value={todoInput}
          onChange={(ev) => setTodoInput(ev.target.value)}
        ></input>
        {todos.map((item, idx) => (
          <TodoItem
            key={idx}
            label={item.label}
            is_done={item.is_done}
            toggle_todo={() =>
              setTodos(
                todos.toSpliced(idx, 1, {
                  label: item.label,
                  is_done: !item.is_done,
                })
              )
            }
            delete_todo={() => setTodos(todos.toSpliced(idx, 1))}
          />
          // <TodoItem label="Open tuna cans." is.done={false} />
          // <TodoItem label="Feed cats." is.done={false} /> */}
          // {/* <div className="todoitem">
          // 	<input type="checkbox" />
          // 	<span className="todotext">Feed the cat</span>
          // <button className="btn btn-danger">Completed</button>
          // </div> */}
        ))}
        <small>
          {todos.filter((item) => !item.is_done).length} items left to do!
        </small>
      </form>
    </>
  );
}

export default App;
