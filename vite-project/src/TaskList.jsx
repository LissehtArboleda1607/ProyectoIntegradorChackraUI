import React from 'react'
import Task from './Task'

const tasks = [
  { id: 1, name: 'Tarea 1', done: false },
  { id: 2, name: 'Tarea 2', done: true },
  { id: 3, name: 'Tarea 3', done: false },
]

const TaskList = () => {
  return (
    <ul>
      {tasks.map(task => {
        return <Task key={task.id} name={task.name} done={task.done} />
      })}
    </ul>
  )
}

export default TaskList