import { useEffect, useState } from "react"

import DayBoardLayout from "../components/board/day-board-layout"
import Button from "../components/button"
import { data } from "../tests/data"

import type { Goal } from "../types/Goal"

const Board = () => {

    const [ goals, setGoals ] = useState<Goal[]>([])
    const [ timelineOption, setTimelineOption ] = useState("Year")

    const timelineOptions = [ "Day", "Week", "Month", "Year" ]

    const handleChangeTimeline = (option:string) => {
        setTimelineOption(option)
    }

    useEffect(() => {
        setGoals(data)
    }, [])

    return <>
        <div className="flex flex-col h-screen">
            <div className="flex justify-end gap-2 p-4 border-b border-gray-200">
                <Button className="outline outline-gray-200 hover:border-transparent">Today</Button>
                { timelineOptions.map(option => 
                    <Button 
                        key={option}
                        onClick={() => handleChangeTimeline(option)}
                        className={timelineOption === option ? "text-neutral-500 bg-gray-100" : ""}>
                        {option}
                    </Button>
                )}
            </div>
            <DayBoardLayout goals={goals} />
        </div>
    </>
}

export default Board