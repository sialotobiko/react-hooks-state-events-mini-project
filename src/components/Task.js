import React from 'react'

function Task({ task, deleteTask }) {
  return (
    <div className='task'>
      <div className='label'>{task.category}</div>
      <div className='text'>{task.text}</div>
      <button className='delete' onClick={deleteTask}>
        X
      </button>
    </div>
  )
}

export default Task