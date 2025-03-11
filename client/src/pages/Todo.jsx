import React from 'react'
import TodoInput from '../components/Input/TodoInput'
import TodoList from '../components/list/TodoList'
import {TodoProvider} from '../contexts/TodoContext'
import { useState, useEffect } from 'react'

const Todo = () => {
 const [todos , setTodos]= useState([]);
  const addTodo =(todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo},...prev])
  }
  const updateTodo =(id , todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo :prevTodo)))
  }
  const toggleTodo = (id)=>{}
  const deleteTodo = (id)=>{}

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    console.log(todos)
    if (storedTodos && storedTodos.length) {
      setTodos(JSON.parse(storedTodos));
      }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos)
  }, [todos])
  
  
  
  return (
    <TodoProvider
      value={{todos, addTodo, toggleTodo, updateTodo, deleteTodo}}
    >
    <div className='container flex-col gap-2 todo-box p-5 rounded-md'>
        <h1 className='p-3'>Your Daily Todo App</h1>
        <div className="todo-container">
          <div className="create-todo">
            <h1>Create a Todo</h1>
            <TodoInput/>
          </div>
          <div className="todo-lists">
            <h1>Todo list</h1>
            {todos.map((todo)=>(
              <TodoList task = {todo.task}/>
            ))}
          </div>
        </div>
    </div>
    </TodoProvider>
  )
}

export default Todo