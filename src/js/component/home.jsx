import React from "react";
import { useState } from "react";
import "./app.css";

//create your first component
function TodoItem ({ label, is_done, delete_todo, toggle_todo }) {
	return (
		<div className="todoitem">
					<input type="checkbox" checked={is_done} onChange={toggle_todo} />
					<span className="todotext">{label}</span>
				<button className="btn btn-danger" onClick={delete_todo}>Completed</button>
				</div>
	);
};

function App() {
	const [todos, setTodos] = useState([]);
	// const [item, setItem] = useState ({
	// 	label: "Buy some tuna cans."
	// 	is.done: false,
	// });
	
	return (
		<>
			<form className="container d-flex flex-column align-items-center justify-content-start">
				<h1>To Do List</h1>
				<input 
				className="form-control form-control-lg" 
				type="text" 
				placeholder="What do you want to get done today?" 
				aria-label="input field">
				</input>
				{todos.map((item) => (
					<TodoItem 
						label= {item.label} 
						is_done={item.is_done} 
						toggle_todo={() => 
					setTodos(		
					todos.toSpliced(idx, 1, {
					label: item.label,
					is_done: !item.is_done,
				})
				)
				}
				/>
				// <TodoItem label="Open tuna cans." is.done={false} />
				// <TodoItem label="Feed cats." is.done={false} /> */}
				// {/* <div className="todoitem">
				// 	<input type="checkbox" />
				// 	<span className="todotext">Feed the cat</span>
				// <button className="btn btn-danger">Completed</button>
				// </div> */}
				))}
			</form>
		</>
	);
};

export default App;
