import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoList = (todo) => {
  const { deleteTodo , toggleTodo, updateTodo } = useTodo()
//const [todo , setTodo] = useState({}) // maybe delete
//const handleUpdate = (e)=>{ updateTodo(todo.id , {id:todo.id,task:e.target.value,...todo}) } //fixed logic
//const [editable, setEditable] = useState(false)
  const handleToggle = ()=>{
    setEditable((prev)=>!prev)
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
//						onChange={handleUpdate}
            />
          <div className="btn-container">
              <button className='todo-input-btn' type="button" onClick={()=>setEditable((prev)=>!prev)} >{editable? "ok":"edit"}</button> // fixed logic 
              <button className='todo-input-btn' type="submit">delete</button>
          </div>
        </form>
    </div>
  )
}

export default TodoList