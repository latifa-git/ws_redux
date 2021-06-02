import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
 const TaskList = useSelector(state => state.TaskReducer.taskList)
    return (
        <div>{
            TaskList.map(el=> <TaskItem el={el} key={el.id}/>)
        }
        </div>
    )
}

export default TaskList
