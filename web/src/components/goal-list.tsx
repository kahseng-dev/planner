import { useEffect, useState } from "react"

import CircleCheck from "../assets/icons/circle-check.svg"
import CircleCheckFilled from "../assets/icons/circle-check-filled.svg"
import Plus from "../assets/icons/plus.svg"
import X from "../assets/icons/x.svg"

import Button from "../components/button"

import type { Goal } from "../types/Goal"
import type { Task } from "../types/Task"

interface GoalListProps {
    goal:Goal,
    key?: number,
}

const GoalList = ({ goal }:GoalListProps) => {

    const [ tasks, setTasks ] = useState<Task[]>(goal.tasks)
    const [ isGoalCompleted, setIsGoalCompleted ] = useState(false)
    
    const updateGoalIsCompleted = () => {
        let isCompleted = true

        tasks.map(task => {
            if (!task.isCompleted) return isCompleted = false
        })

        setIsGoalCompleted(isCompleted)
    }

    const handleDeleteGoal = () => {

    }

    const handleToggleTask = (id:number) => {
        setTasks(tasks.map(task => task.id !== id ?
                { ...task }
                :
                { ...task, isCompleted: !task.isCompleted }
            )
        )
    }

    const handleDeleteTask = (id:number) => {
        
    }

    useEffect(() => {
        updateGoalIsCompleted()
    }, [tasks])

    return (
        <div className="text-sm flex flex-col gap-2">
            <div className="group/goal-item py-1 px-2 cursor-pointer flex items-center justify-between rounded transition duration-300 select-none hover:bg-gray-100">
                <div className="flex items-start gap-2">
                    { isGoalCompleted ? 
                        <img className="mt-0.5 size-4" src={CircleCheckFilled} alt="circle-check-filled" />
                        :
                        <img className="mt-0.5 size-4" src={CircleCheck} alt="circle-check" />
                    }
                    <p className={`${isGoalCompleted && "text-neutral-400 line-through"} text-neutral-500 break-all`}>{goal.title}</p>
                </div>
                <button 
                    onClick={handleDeleteGoal}
                    className="size-4 min-w-4 opacity-0 group-hover/goal-item:opacity-100 transition duration-300 cursor-pointer">
                    <img src={X} alt="x" />
                </button>
            </div>
            <div className="group/task pl-5 w-full flex flex-col gap-2">
                { tasks.map(task => 
                    <label 
                        key={task.id}
                        htmlFor={`task[${task.id}]`} 
                        className="group/task-item py-1 px-2 flex justify-between items-center gap-2 text-neutral-500 cursor-pointer rounded transition duration-300 break-all select-none hover:bg-gray-100 has-checked:text-neutral-400 has-checked:line-through">
                        <div className="flex gap-2">
                            <input 
                            onChange={() => handleToggleTask(task.id)}
                            type="checkbox" 
                            id={`task[${task.id}]`} 
                            value={task.text}
                            checked={task.isCompleted}
                            className="cursor-pointer" />
                            <span>{task.text}</span>
                        </div>
                        <button 
                            onClick={() => handleDeleteTask(task.id)}
                            className="size-4 min-w-4 opacity-0 group-hover/task-item:opacity-100 transition duration-300 cursor-pointer">
                            <img src={X} alt="x" />
                        </button>
                    </label>
                )}
                <Button className="opacity-0 group-hover/task:opacity-100 w-full flex items-center gap-2">
                    <img className="size-4" src={Plus} alt="plus" />
                    Add task
                </Button>
            </div>
        </div>
    )
}

export default GoalList