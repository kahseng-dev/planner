import { useEffect, useState } from "react"
import { DateTime, Interval } from "luxon"

import Tag from "../components/tag"
import Button from "../components/button"
import GoalList from "../components/goal-list"

import { useHorizontalScroll } from "../utils/useHorizontalScroll"

import type { Goal } from "../types/Goal"

import { data } from "../tests/data"

const Board = () => {

    const today = DateTime.local()
    
    const [ goals, setGoals ] = useState<Goal[]>([])
    const [ periods, setPeriods ] = useState<string[]>(["test"])
    const [ timelineOption, setTimelineOption ] = useState("Year")

    const [ firstDayOfActiveMonth, setFirstDayOfActiveMonth ] = useState(
        today.startOf("month")
    )

    const daysOfMonth = Interval.fromDateTimes(
        firstDayOfActiveMonth.startOf("month"), 
        firstDayOfActiveMonth.endOf("month")
    ).splitBy({day: 1}).map(day => day.start)

    const timelineOptions = ["Day", "Week", "Month", "Year" ]
    const horizontalScrollRef = useHorizontalScroll()
    
    const generatePeriods = (option:string) => {
        let results:string[] = []

        switch(option) {
            case "Year":

                break

            case "Month":

                break

            case "Week":

                break
                
            case "Day":

                break
                
            default:
                break
        }

        setPeriods(results)
    }

    const handleChangeTimeline = (option:string) => {
        setTimelineOption(option)
        generatePeriods(option)
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
            <div 
                ref={horizontalScrollRef}
                className="flex flex-row h-full overflow-x-scroll">
                { daysOfMonth.map((dayOfMonth, index) => (
                    <div 
                        key={index}
                        className="p-4 min-w-1/4 border-r border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <p className="text-neutral-800">{`${dayOfMonth?.day} ${firstDayOfActiveMonth.monthLong}`}</p>
                            { dayOfMonth?.toISODate() === today.toISODate() && <Tag text="today" /> }
                        </div>
                        <div className="flex flex-col gap-4">
                            { goals.map(goal => {
                                let createdDateTime = DateTime.fromJSDate(goal.createdDateTime)

                                if (createdDateTime.toISODate() == dayOfMonth?.toISODate()) {
                                    return <GoalList key={goal.id} goal={goal} />
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Board

            /*
            <div className="flex h-full">
                { periods.map(period => 
                    <div 
                        key={period}
                        className="w-1/4 p-4 border-r border-gray-200">
                        <p className="text-neutral-800 mb-2">{period}</p>
                        <div className="flex flex-col gap-4">
                            { goals.map(goal => {
                                return <GoalList key={goal.id} goal={goal} />
                            })}
                        </div>
                    </div>
                )}
            </div>
            */