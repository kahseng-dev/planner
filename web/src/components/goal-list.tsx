import type { Goal } from "../types/Goal"

interface GoalListProps {
    goal:Goal,
    key?: number,
}

const GoalList = ({ goal }:GoalListProps) => {
    return (
        <div className="text-sm flex flex-col gap-2">
            <label 
                htmlFor={goal.title} 
                className="px-2 flex gap-2 text-neutral-500 cursor-pointer rounded transition duration-300 break-all select-none hover:bg-gray-200 has-checked:text-neutral-400 has-checked:line-through">
                <input 
                    type="checkbox" 
                    id={goal.title} 
                    value={goal.title} />
                {goal.title}
            </label>
            <div className="pl-5 w-full flex flex-col gap-2">
                { goal.tasks.map((task, index) => 
                    <label 
                        key={index}
                        htmlFor={task.text} 
                        className="px-2 flex gap-2 text-neutral-500 cursor-pointer rounded transition duration-300 break-all select-none hover:bg-gray-200 has-checked:text-neutral-400 has-checked:line-through">
                        <input 
                            type="checkbox" 
                            id={task.text} 
                            value={task.text}
                            checked={task.isCompleted} />
                        {task.text}
                    </label>
                )}
            </div>
        </div>
    )
}

export default GoalList