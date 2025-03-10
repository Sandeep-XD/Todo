import React from 'react'
import TodoInput from '../components/Input/TodoInput'
import TodoList from '../components/list/TodoList'

const Todo = () => {
  return (
    <div className='container flex-col gap-2 todo-box p-5 rounded-md'>
        <h1 className='p-3'>Your Daily Todo App</h1>
        <div className="todo-container">
          <div className="create-todo">
            <h1>Create a Todo</h1>
            <TodoInput/>
          </div>
          <div className="todo-lists">
            <h1>Todo list</h1>
            <TodoList/>
            <TodoList/>
            <TodoList/>
          </div>
        </div>
    </div>
  )
}

export default Todo