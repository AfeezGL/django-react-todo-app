import React from 'react'

const Task = ({task, clickFunction}) => {
    console.log(task.id)
    return (
        <div className="task">
            <p>{task.text}</p>
            <button onClick={() => clickFunction(task)}></button>
        </div>
    )
}

export default Task
