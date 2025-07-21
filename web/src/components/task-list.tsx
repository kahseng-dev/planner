import type { Task } from "@/types/Task"
import type { ChangeEvent, Dispatch, SetStateAction } from "react"

import X from "@assets/icons/x.svg"

interface TaskListProps {
    task:Task,
    tasks:Task[],
    setTasks:Dispatch<SetStateAction<Task[]>>,
}

const TaskList = ({ task, tasks, setTasks }:TaskListProps) => {

    const handleChangeTaskText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        return setTasks(tasks.map(taskItem => taskItem.id !== task.id ?
                { ...taskItem }
                :
                { ...taskItem, text: event.currentTarget.value }
            )
        )
    }

    const handleToggleTask = () => {
        return setTasks(tasks.map(taskItem => taskItem.id !== task.id ?
                { ...taskItem }
                :
                { ...taskItem, isCompleted: !taskItem.isCompleted }
            )
        )
    }

    const handleDeleteTask = () => {
        return setTasks(tasks.filter(taskItem => taskItem.id !== task.id))
    }

    return (
        <div className="group/task-item flex items-center gap-2">
            <input 
                onChange={handleToggleTask}
                type="checkbox" 
                id={`task[${task.id}]`}
                checked={task.isCompleted}
                className="cursor-pointer" />
            <textarea 
                onChange={handleChangeTaskText}
                value={task.text}
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