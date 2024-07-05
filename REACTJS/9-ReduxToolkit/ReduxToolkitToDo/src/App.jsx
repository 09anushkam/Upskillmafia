import React from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import './App.css'

const App = () => {
  return (
    <>
    <div>Todos</div>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App