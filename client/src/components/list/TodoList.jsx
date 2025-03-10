import React from 'react'

const TodoList = () => {
  return (
    <div className='bg-prime flex rounded-sm p-1'>
        <form className='container gap-2 justify-between'>
            <input className='todo-input' type="text" placeholder="Enter a task"/>
            <div className="btn-container">
                <button className='todo-input-btn' type="submit">edit</button>
                <button className='todo-input-btn' type="submit">delete</button>
            </div>
        </form>
    </div>
  )
}

export default TodoList