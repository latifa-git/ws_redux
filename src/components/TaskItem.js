import React from 'react'
import { useDispatch } from 'react-redux'
import EditTask from './EditTask'
import { completeTask, deleteTask } from '../js/action/TaskAction'
const TaskItem = (el) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
           <div className={el.isDone ? "done" : null}>{el.description}</div>
           <div>
               <button onClick={() => dispatch(completeTask(el.id))}>{el.isDone ? "Undo" : "complete"}</button>
               <EditTask el={el}/>
               <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
           </div>
        </div>
    )
}

export default TaskItem
