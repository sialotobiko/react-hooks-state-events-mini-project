import React from 'react'
import Task from './Task'

function TaskList({ tasks, deleteTask }) {
  return (
    <div className='tasks'>
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task task={task} key={index} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList