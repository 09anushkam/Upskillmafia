import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1, text:"Hello World"}],
}

// creating slice / reducer
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(), 
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        updateTodo:(state,action)=>{
            // hw
        },
    }
});

export const {addTodo,updateTodo,removeTodo}=todoSlice.actions;

export default todoSlice.reducer;