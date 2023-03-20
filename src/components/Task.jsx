// rafce => reactArrowFunctionExportComponent

import React from 'react'
// passing function to Home for delete Task
const Task = ({title, description, deleteTask, index}) => {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>

        <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  )
}

export default Task