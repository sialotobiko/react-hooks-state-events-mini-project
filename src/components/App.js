import React, { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

import { CATEGORIES, TASKS } from '../data'
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filterCategory, setFilterCategory] = useState('All')

  function deleteTask(event) {
    const taskToDelete = event.target.parentElement.children[1].innerText
    const updatedTaskList = tasks.filter((task) => task.text !== taskToDelete)
    setTasks(updatedTaskList)
  }

  function filterSelectedCategoryTasks(event) {
    setFilterCategory(event.target.innerText)
  }

  function onTaskFormSubmit(taskDetail, category) {
    const formData = {
      text: taskDetail,
      category: category,
    }
    const dataArray = [...tasks, formData]
    setTasks(dataArray)
  }

  const displayedTasks = tasks.filter((task) => {
    if (filterCategory === 'All') {
      return true
    } else {
      return filterCategory === task.category
    }
  })

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        filterSelectedCategoryTasks={filterSelectedCategoryTasks}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={displayedTasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App