import { ADD_TODO, DELETE_TODO } from './actions'
const initialState = {
	todo: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const { todo } = action.payload
			return {
				...state,
				todo: [...state.todo, todo],
			}
		case DELETE_TODO:
			const { index } = action.payload
			const newTodos = [...state.todo]
			newTodos.splice(index, 1)
			return {
				...state,
				todo: newTodos,
			}

		default:
			return state
	}
}
