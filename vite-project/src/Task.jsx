import React from 'react'

const Task = ({ name, done }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} />
        {name}
      </label>
    </li>
  )
}

export default Task