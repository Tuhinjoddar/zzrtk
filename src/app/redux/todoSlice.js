import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: []
}

const slice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload,
            }
            state.todos.push(data);
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

        },
        setTodos: (state, action) => {
            state.todos = action.payload; // Set users from localStorage or external source
        },
    }
})



export const { addTodos, removeTodos, setTodos } = slice.actions;



export default slice.reducer;