import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoList = (todo) => {
  const { todos, deleteTodo , toggleTodo , updateTodo} = useTodo()
  const [toggle , setToggle] = useState(false)
  const [edit, setEdit ] = useState(true)
  const [task , setTask] = useState(todo.todo.task)
  const [taskId , setTaskId] = useState(todo.todo.id)
  const handleToggle = ()=>{
    setToggle((prev)=>!prev)
  }
  const handleEdit = (e) =>{
    e.preventDefault
    console.log(todo)
    if(edit){
    }
    setEdit((prev)=>!prev)
  }
  const handleField =(e)=>{

  }

  const handleDelete =()=>{
    
  }
  return (
    <div className='bg-prime flex rounded-sm p-1'>
        <form className='container gap-2 justify-between'>
          <input 
              type='checkbox'
              checked = {toggle}
              onChange={handleToggle}
            />
          <input 
              className='todo-input'
              type="text"
              placeholder={task}
              value={task}
              onChange={handleField}
            />
          <div className="btn-container">
              <button 
                className='todo-input-btn'
                type="button"
                onClick={handleEdit}
              >
                {edit ? "edit" : "ok"}
                </button>
              <button 
                className='todo-input-btn' 
                type="button"
                onClick={handleDelete}
              >
                delete
                </button>
          </div>
        </form>
    </div>
  )
}

export default TodoList