import React from 'react'

const TodoInput = () => {
  return (
    <div className='bg-prime p-2 w-full rounded-sm'>
        <form className='container justify-around gap-2'>
            <input className='todo-input' type="text" placeholder="Enter a task"/>
            <button className='todo-input-btn' type="submit" >Add</button>
        </form>
    </div>
  )
}

export default TodoInput