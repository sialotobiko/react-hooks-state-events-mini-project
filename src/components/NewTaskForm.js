import React, { useState } from 'react'

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetail, setTaskDetail] = useState('')
  const [category, setCategory] = useState('Code')

  function handleTaskDetailsChange(event) {
    setTaskDetail(event.target.value)
  }

  function handleTaskCategoryChange(event) {
    setCategory(event.target.value)
  }

  function renderCategories() {
    return categories.map((category) => {
      if (category !== 'All') {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        )
      }
      return null
    })
  }

  function addNewTask(event) {
    event.preventDefault()
    onTaskFormSubmit(taskDetail, category)
  }

  return (
    <form className='new-task-form' onSubmit={addNewTask}>
      <label>
        Details
        <input type='text' name='text' onChange={handleTaskDetailsChange} />
      </label>
      <label>
        Category
        <select name='category' onChange={handleTaskCategoryChange}>
          {/* render <option> elements for each category here */}
          {renderCategories()}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  )
}

export default NewTaskForm