import { useEffect, useState } from "react"
import { DateTime, Interval } from "luxon"

import Sidebar from "@components/sidebar"
import Button from "@components/button"
import SidebarIcon from "@assets/icons/sidebar.svg"
import BoardLayout from "@components/board/board-layout"
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

        const today = DateTime.local()

        let dateList:(DateTime<true> | null)[] = []

        switch(timelineOption) {
            case "Day":
                dateList = Interval.fromDateTimes(
                    today.startOf("month"), 
                    today.endOf("month")
                ).splitBy({ day: 1 }).map(day => day.start)
                break

            case "Week":
                dateList = Interval.fromDateTimes(
                    today.startOf("week"), 
                    today.endOf("week")
                ).splitBy({ day: 1 }).map(day => day.start)
                break 

            case "Month":
                dateList = Interval.fromDateTimes(
                    today.startOf("year"), 
                    today.endOf("year")
                ).splitBy({ month: 1 }).map(day => day.start)
                break

            case "Year":
                dateList = Interval.fromDateTimes(
                    today, 
                    (today.set({ year: today.year + 11 }))
                ).splitBy({ year: 1 }).map(day => day.start)
                break
        }

        return <BoardLayout 
            dateList={dateList} 
            timeline={timelineOption} 
            goals={goals} 
            setGoals={setGoals} />
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
