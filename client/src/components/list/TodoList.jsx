import React, { useState } from 'react'
import { useTodo } from '../../contexts/TodoContext'
const TodoList = (todo) => {
  const { deleteTodo , toggleTodo , updateTodo } = useTodo()
  const [toggle , setToggle] = useState(false)
  const [editable , setEditable] = useState(false)
  const [ id , setId ] = useState(todo.todo.id)
  const [ task , setTask ] = useState(todo.todo.task)
  const handleToggle = ()=>{
    setToggle((prev)=>!prev)
    toggleTodo(toggle)
  }
  const handleEdit = (e) =>{
    e.preventDefault()
    if(editable){
      updateTodo(id,task)
    }
    setEditable((prev)=>!prev)
  }


  const handleField =(e)=>{
    setTask(e.target.value)
  }

  const handleDelete =(e)=>{
    e.preventDefault()
    deleteTodo(id)
  }
  return (
    <div className='bg-prime flex rounded-sm p-1'>
        <div className='container gap-2 justify-between'>
          <input 
              type='checkbox'
              onChange={handleToggle}
						  checked = {todo.completed}
            />
          <input 
              className='todo-input'
              type="text"
              placeholder={task}
              value={task}
              onChange={handleField}
              disabled={!editable}
            />
          <div className="btn-container">
              <button
                className='todo-input-btn' 
                type="button"
                onClick={handleEdit}
              >
                {editable? "ok" : "edit"}
              </button>
              <button 
                className='todo-input-btn' 
                type="button"
                onClick={handleDelete}
              >
                delete
              </button>
          </div>
        </div>
    </div>
  )
}

export default TodoList