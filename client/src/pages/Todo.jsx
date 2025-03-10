import React from 'react'
import TodoInput from '../components/Input/TodoInput'

const Todo = () => {
  return (
    <div className='container flex-col todo-box'>
        <h1 className='p-3'>Todo List</h1>
        <TodoInput/>
    </div>
  )
}

export default Todo