import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoInput = () => {
  const {addTodo} = useTodo()
const [todo , setTodo]= useState({})
  const [task , setTask] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(task&&task.length){
      setTodo({
        task:task
      })
      addTodo({...todo , task})
    }
    // console.log(task)
    // addTodo({id: Date.now(), task:task , completed: false})
    // addTodo({...todo, task:task, completed: false})
    setTask('')
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
                onChange={(e)=> setTask(e.target.value)}
              />
            <button className='todo-input-btn' type="submit" >Add</button>
        </form>
    </div>
  )
}

export default TodoInput