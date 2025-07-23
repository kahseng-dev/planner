import type { ChangeEvent, Dispatch, SetStateAction } from "react"

import X from "@assets/icons/x.svg"

import type { Task } from "@/types/Task"
import type { Goal } from "@/types/Goal"

import { setStore } from "@/services/store"
import { getAuthToken, toggleTask, replaceTaskText, deleteTask } from "@/services/api"

interface TaskListProps {
    task:Task,
    goal:Goal,
    goals:Goal[],
    setGoals:Dispatch<SetStateAction<Goal[]>>,
}

const TaskList = ({ task, goal, goals, setGoals }:TaskListProps) => {

    const token = getAuthToken()

    const handleSaveTaskText = async () => {

        if (token) {
            task = await replaceTaskText(task.id, task.text)
        }

        setGoals([...goals])
        setStore([...goals])
    }

    const handleChangeTaskText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        task.text = event.currentTarget.value
        return goal.tasks.map(taskItem => {
            if (taskItem.id !== task.id) return { ...taskItem }
            return { ...taskItem, task }
        })
    }

    const handleToggleTask = async () => {
        task.isCompleted = !task.isCompleted

        if (token) {
            task = await toggleTask(task.id)
        }

        goal.tasks.map(taskItem => {
            if (taskItem.id !== task.id) return { ...taskItem }
            return { ...taskItem, task }
        })
        
        setGoals([...goals])
        setStore([...goals])
    }

    const handleDeleteTask = async () => {
        goal.tasks = goal.tasks.filter(taskItem => taskItem.id !== task.id)

        if (token) {
            deleteTask(task.id)
        }

        setGoals([...goals])
        setStore([...goals])
    }

    return (
        <div className="group/task-item flex items-center gap-2">
            <input 
                onChange={handleToggleTask}
                type="checkbox"
                checked={task.isCompleted}
                className="cursor-pointer" />
            <textarea 
                onBlur={handleSaveTaskText}
                onChange={handleChangeTaskText}
                defaultValue={task.text}
                rows={1}
                className={`${task.isCompleted && "line-through"} py-1 px-2 w-full field-sizing-content resize-none outline-0 break-all text-neutral-500 rounded transition duration-300 hover:bg-gray-100`} />
            <button 
                onClick={handleDeleteTask}
                className="size-4 min-w-4 opacity-0 group-hover/task-item:opacity-100 transition duration-300 cursor-pointer">
                <img src={X} alt="x" />
            </button>
        </div>
    )
}

export default TaskList