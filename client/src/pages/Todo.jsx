import React from 'react'
import TodoInput from '../components/Input/TodoInput'
import TodoList from '../components/list/TodoList'
import {TodoProvider} from '../contexts/TodoContext'
import { useState, useEffect } from 'react'

const Todo = () => {
  const [todos , setTodos]= useState([]);
  const addTodo =(todo)=>{
    setTodos((prev)=>[{id: Date.now(),completed:false, ...todo},...prev])
  }
  const updateTodo =(id , todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{
      if(prevTodo.id === id){
        return {...prevTodo,task:todo,id}
      }else{
        // console.log(prevTodo.id)
        return prevTodo
      }
    }))
  }
  const toggleTodo = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{
      if(prevTodo.id === id){
        // console.log(prevTodo.completed)
        return {...prevTodo,completed:!prevTodo.completed}
      }else{
        return prevTodo
      }
    }))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    // console.log(storedTodos)
    if (storedTodos && storedTodos.length) {
      setTodos(JSON.parse(storedTodos));
      }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // console.log(todos)
  }, [todos])
  
  
  
  return (
    <TodoProvider
      value={{todos, addTodo, toggleTodo, updateTodo, deleteTodo}}
    >
    <div className='container flex-col gap-2 todo-box p-5 rounded-md'>
        <h1 className='p-3'>Your Daily Todo App</h1>
        <div className="todo-container md:flex min-h-[60vh]">
          <div className="create-todo">
            <h1>Create a Todo</h1>
            <div className="add-todo flex w-[300px] mx-auto">
              <TodoInput/>
            </div>
          </div>
          <div className="todo-list mx-5 flex flex-col items-center">
            <h1 className='w-full m-3'>Todo list</h1>
            <div className="todo-items">
            {
              todos.length ?
                todos.map((todo)=>(
                  <div className='todo-lists' key={todo.id}>
                    <TodoList todo = {{...todo}}/>
                  </div>
                ))
                :<span className='bg-amber-950'>
                  Empty todo list . Add a new Task
                  </span>
            }
            </div>
          </div>
        </div>
    </div>
    </TodoProvider>
  )
}

export default Todo