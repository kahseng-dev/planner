import { useEffect, useState } from "react"

import DayBoardLayout from "@components/board/layout/day-board-layout"
import WeekBoardLayout from "@components/board/layout/week-board-layout"
import MonthBoardLayout from "@components/board/layout/month-board-layout"
import YearBoardLayout from "@components/board/layout/year-board-layout"

import Sidebar from "@components/sidebar"
import Button from "@components/button"
import SidebarIcon from "@assets/icons/sidebar.svg"
import { useHorizontalScroll } from "@/utils/useHorizontalScroll"

import { data } from "@/tests/data"

import type { Goal } from "@/types/Goal"

const Board = () => {

    const [ goals, setGoals ] = useState<Goal[]>([])
    const [ timelineOption, setTimelineOption ] = useState("Year")
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)

    const timelineOptions = [ "Day", "Week", "Month", "Year" ]

    const horizontalScrollRef = useHorizontalScroll()

    const loadBoardLayout = () => {
        switch(timelineOption) {
            case "Day":
                return <DayBoardLayout goals={goals} setGoals={setGoals} />
            case "Week":
                return <WeekBoardLayout goals={goals} setGoals={setGoals} />
            case "Month":
                return <MonthBoardLayout goals={goals} setGoals={setGoals} />
            case "Year":
                return <YearBoardLayout goals={goals} setGoals={setGoals} />
        }
    }

    useEffect(() => {
        setGoals(data)
    }, [])

    return <>
        <div className="flex flex-col size-full bg-white">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex justify-between p-4 border-b border-gray-200">
                <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <img className="size-5" src={SidebarIcon} alt="sidebar-icon" />
                </Button>
                <div className="flex justify-end sm:gap-4">
                    { timelineOptions.map(option => 
                        <Button 
                            key={option}
                            onClick={() => setTimelineOption(option)}
                            className={timelineOption === option ? "text-neutral-500 bg-gray-100" : ""}>
                            {option}
                        </Button>
                    )}
                </div>
            </div>
            <div 
                ref={horizontalScrollRef} 
                className="flex flex-row h-full overflow-x-scroll">
                {loadBoardLayout()}
            </div>
        </div>
    </>
}

export default Board
