import React from 'react'

const TodoInput = () => {
  return (
    <div className='bg-gray-700 p-2 rounded-sm'>
        <form className='container gap-2'>
            <input className='todo-input' type="text" placeholder="Enter a task"/>
            <button className='todo-input-btn' type="submit" >Add Task</button>
        </form>
    </div>
  )
}

export default TodoInput