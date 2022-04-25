import React from 'react'

export default function AllTasks(props) {
    console.log(props);
    return (
        <ul>
            {
                props.tasks && props.tasks.map( (task, index) => {
                    return(
                        <li key={index} >
                            {task.title}: {task.description}
                            <button onClick={() => props.deleteTask(index)}> Done </button>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
