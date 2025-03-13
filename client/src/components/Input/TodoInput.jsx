import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoInput = () => {
  const {addTodo} = useTodo()
  const [task , setTask] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(task)
    addTodo({id: Date.now(), task:task , completed: false})
  }
  return (
    <div className='bg-prime p-2 w-full rounded-sm'>
        <form 
            className='container justify-around gap-2'
            onSubmit={handleSubmit}
          >
            <input 
                className='todo-input'
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => {setTask(e.target.value)}}
              />
            <button className='todo-input-btn' type="submit" >Add</button>
        </form>
    </div>
  )
}

export default TodoInput