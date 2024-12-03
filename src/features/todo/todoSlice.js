import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1 , text : "hello World",description: "hello to this world",done:"true"}]
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
                done : action.payload.done
             }
             state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },
        editTodo:(state,action) => {
            state.todos =state.todos.map((todo)=>
            todo.id === action.payload.id ?
            {...todo,description: action.payload.description,text:action.payload.text,done:action.payload.done }
            :todo
            )
        }
    }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions

export default todoSlice.reducer