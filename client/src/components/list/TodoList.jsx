import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoList = (todo) => {
  const { todos, deleteTodo , toggleTodo } = useTodo()
  const [toggle , setToggle] = useState(false)

  const handleToggle = ()=>{
    setEditable((prev)=>!prev)
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
              checked = {editable}
						//checked = {todo.completed}
              onChange={handleToggle}

            />
          <input 
              className='todo-input'
              type="text"
              placeholder={todo.task}
              value={todo.task}
              onChange={(e)=> e.target.value}
            />
          <div className="btn-container">
              <button className='todo-input-btn' type="submit">edit</button>
              <button className='todo-input-btn' type="submit">delete</button>
          </div>
        </form>
    </div>
  )
}

export default TodoList