import { useEffect, useState } from "react"

import Button from "../components/button"
import GoalList from "../components/goal-list"

import type { Goal } from "../types/Goal"

import { data } from "../tests/data"

const BoardPage = () => {
    
    const [ goals, setGoals ] = useState<Goal[]>([])
    const [ timeframeOption, setTimeframeOption ] = useState("Year")
    
    const timeframeOptions = ["Today", "Day", "Week", "Month", "Quarter", "Year" ]

    const handleChangeTimeframe = (option:string) => {
        setTimeframeOption(option)
    }

    useEffect(() => {
        setGoals(data)
    }, [])

    return <>
        <div className="flex flex-col h-screen">
            <div className="flex justify-end gap-2 p-4 border-b border-gray-200">
                { timeframeOptions.map(option => 
                    <Button 
                        key={option}
                        onClick={() => handleChangeTimeframe(option)}
                        className={timeframeOption === option ? "text-neutral-500 bg-neutral-300" : ""}>
                        {option}
                    </Button>
                )}
            </div>
            <div className="h-full w-1/4 p-4 border-r border-gray-200">
                <p className="text-neutral-800 mb-2">{2025}</p>
                <div className="flex flex-col gap-4">
                    { goals.map((goal, index) =>
                        <GoalList key={index} goal={goal} />
                    )}
                </div>
            </div>
        </div>
    </>
}

export default BoardPage