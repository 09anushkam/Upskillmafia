import React,{useEffect,useState} from 'react';
import { TodoProvider } from './Context';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

const App = () => {

  const [todos,setTodos]=useState([]);

  const addTodo=(task)=>{
    setTodos((oldTodos)=>[{id:Date.now(),...task},...oldTodos]);
  }

  const deleteTodo=(id)=>{
    setTodos((oldTodos)=>oldTodos.filter((oldTodo)=>oldTodo.id!==id));
  }

  const updateTodo=(task,id)=>{
    setTodos((oldTodos)=>oldTodos.map((oldTodo)=>(oldTodo.id===id?task:oldTodo)));
  }

  const toggleComplete=(id)=>{
    setTodos((oldTodos)=>oldTodos.map((oldTodo)=>oldTodo.id===id?{...oldTodo,completed:!oldTodo.completed}:oldTodo));
  }

 // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    console.log("Loaded from localStorage:", storedTodos); // Debug log
    if (storedTodos) {
      try {
        const todos = JSON.parse(storedTodos);
        if (todos && Array.isArray(todos)) {
          setTodos(todos);
        }
      } catch (error) {
        console.error("Failed to parse todos from localStorage", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    console.log("Saving to localStorage:", todos); // Debug log
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
  <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                </div>
              ))}
          </div>
      </div>
    </div>
  </TodoProvider>
  );
}

export default App;