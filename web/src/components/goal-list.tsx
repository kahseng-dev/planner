import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import type { Dispatch, SetStateAction } from "react"

import CircleCheck from "@assets/icons/circle-check.svg"
import CircleCheckFilled from "@assets/icons/circle-check-filled.svg"
import Plus from "@assets/icons/plus.svg"
import X from "@assets/icons/x.svg"

import Button from "@components/button"
import TaskList from "@components/task-list"

import type { Goal } from "@/types/Goal"
import type { Task } from "@/types/Task"
import type { CustomJwtPayload } from "@/types/CustomJwtPayload"

import { setStore } from "@/services/store"
import { getAuthToken, createTask, replaceGoalTitle, deleteGoal } from "@/services/api"

interface GoalListProps {
    goal:Goal,
    goals:Goal[],
    setGoals:Dispatch<SetStateAction<Goal[]>>,
}

const GoalList = ({ goal, goals, setGoals }:GoalListProps) => {

    const [ isGoalCompleted, setIsGoalCompleted ] = useState(false)

    const token = getAuthToken()
    
    const updateGoalIsCompleted = () => {
        if (goal.tasks.length < 1) return setIsGoalCompleted(false)

        if (!goal.tasks.every(task => task.isCompleted === true)) {
            return setIsGoalCompleted(false)
        }

        return setIsGoalCompleted(true)
    }

    const handleSaveGoalTitle = () => {

        if (token) {
            replaceGoalTitle(goal.id, goal.title)
        }
        
        setStore(goals)
    }

    const handleChangeGoalTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return goal.title = event.currentTarget.value
    }

    const handleDeleteGoal = () => {
        goals = goals.filter(goalItem => goalItem.id !== goal.id)

        if (token) {
            deleteGoal(goal.id)
        }

        setGoals(goals)
        setStore(goals)
    }

    const handleCreateTask = async () => {
        let task:Task = { id:goal.tasks.length + 1, text:"", isCompleted:false, }

        if (token) {
            task = await createTask(goal.id)
        }

        goal.tasks.push(task)

        setGoals([...goals])
        setStore([...goals])
    }

    useEffect(() => {
        updateGoalIsCompleted()
    }, [goals])

    return (
        <div className="text-sm flex flex-col gap-2">
            <div className="group/goal-item flex items-center gap-2">
                { isGoalCompleted ? 
                    <img className="mt-0.5 size-4" src={CircleCheckFilled} alt="circle-check-filled" />
                    :
                    <img className="mt-0.5 size-4" src={CircleCheck} alt="circle-check" />
                }
                <textarea 
                    onBlur={handleSaveGoalTitle}
                    onChange={handleChangeGoalTitle}
                    defaultValue={goal.title}
                    rows={1}
                    className={`${isGoalCompleted && "line-through"} py-1 px-2 w-full field-sizing-content resize-none outline-0 break-all text-neutral-500 rounded transition duration-300 hover:bg-gray-100`} />
                <button 
                    onClick={handleDeleteGoal}
                    className="size-4 min-w-4 opacity-0 group-hover/goal-item:opacity-100 transition duration-300 cursor-pointer">
                    <img src={X} alt="x" />
                </button>
            </div>
            <div className="group/task pl-5 w-full flex flex-col gap-2">
                { goal.tasks.map((task, index) => 
                    <TaskList 
                        key={index} 
                        task={task}
                        goal={goal}
                        goals={goals} 
                        setGoals={setGoals} />
                )}
                <Button 
                    onClick={handleCreateTask}
                    className="opacity-0 group-hover/task:opacity-100 w-full flex items-center gap-2">
                    <img className="size-4" src={Plus} alt="plus" />
                    Add task
                </Button>
            </div>
        </div>
    )
}

export default GoalList