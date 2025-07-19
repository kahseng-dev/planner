import { useEffect, useState } from "react"

import DayBoardLayout from "../components/board/layout/day-board-layout"
import WeekBoardLayout from "../components/board/layout/week-board-layout"
import MonthBoardLayout from "../components/board/layout/month-board-layout"
import YearBoardLayout from "../components/board/layout/year-board-layout"

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

    const loadBoardLayout = () => {
        switch(timelineOption) {
            case "Day":
                return <DayBoardLayout goals={goals} />
            case "Week":
                return <WeekBoardLayout goals={goals} />
            case "Month":
                return <MonthBoardLayout goals={goals} />
            case "Year":
                return <YearBoardLayout goals={goals} />
        }
    }

    useEffect(() => {
        setGoals(data)
    }, [])

    return <>
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <select>
                        <option>2025</option>
                    </select>
                </div>
                <div className="flex justify-end gap-2">
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
            </div>
            {loadBoardLayout()}
        </div>
    </>
}

export default Board