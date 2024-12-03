import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1 , text : "hello World",description: "hello to this world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid() ,
                text : action.payload.text,
                description : action.payload.description,
             }
             state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },
        editTodo:(state,action) => {
            state.todos =state.todos.filter((todo)=>
            todo.id !== action.payload
            )
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer