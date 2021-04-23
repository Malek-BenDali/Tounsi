import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './store/actions'

function App() {
	const [todoText, setTodoText] = useState('')

	const handleChange = event => {
		setTodoText(event.target.value)
	}
	const handleAdd = () => {
		dispatch(addTodo(todoText))
		setTodoText('')
	}
	const handleDelete = index => {
		dispatch(deleteTodo(index))
	}

	const { todo } = useSelector(state => state.mortadha)
	const dispatch = useDispatch()
	console.log(todo)
	return (
		<div className="App">
			<form>
				<input
					type="text"
					value={todoText}
					name={todoText}
					onChange={event => handleChange(event)}
				/>
				<button type="button" onClick={() => handleAdd()}>
					Add
				</button>
			</form>
			<ul>
				{todo.map((element, index) => (
					<div key={index}>
						<li>{element} </li>
						<button type="button" onClick={() => handleDelete(index)}>
							delete
						</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default App
