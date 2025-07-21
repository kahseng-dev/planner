import { DateTime, Interval } from "luxon"
import { type Dispatch, type SetStateAction } from "react"

import Tag from "@components/tag"
import Button from "@components/button"
import GoalList from "@components/goal-list"
import Plus from "@assets/icons/plus.svg"

import type { Goal } from "@/types/Goal"

interface MonthBoardLayoutProps {
    goals:Goal[],
    setGoals:Dispatch<SetStateAction<Goal[]>>,
}

const MonthBoardLayout = ({ goals, setGoals }:MonthBoardLayoutProps) => {

    const today = DateTime.local()

    const firstDayOfActiveYear = today.startOf("year")

    const monthsOfYear = Interval.fromDateTimes(
        firstDayOfActiveYear.startOf("year"), 
        firstDayOfActiveYear.endOf("year")
    ).splitBy({ month: 1 }).map(day => day.start)

    const handleAddGoal = (date:DateTime) => {
        let goal:Goal = { id:goals.length + 1, title:"", date:date.toJSDate(), tasks:[] }
        return setGoals([...goals, goal])
    }

    return <> 
        { monthsOfYear.map((monthOfYear, index) => (
            <div 
                key={index}
                className="group/goal p-4 min-w-full md:min-w-1/3 lg:md:min-w-1/4 border-r border-gray-200 overflow-y-scroll">
                <div className="flex items-center gap-2 mb-2">
                    <p className="text-neutral-800">{monthOfYear?.monthLong}</p>
                    { monthOfYear?.toISODate() == today.toISODate() && <Tag text="today" /> }
                </div>
                <div className="flex flex-col gap-4">
                    { goals.map((goal, index) => {
                        let date = DateTime.fromJSDate(goal.date)

                        if (date.year != monthOfYear?.year) return

                        if (date.month != monthOfYear?.month) return

                        return <GoalList 
                            key={index} 
                            goal={goal} 
                            goals={goals} 
                            setGoals={setGoals} />
                    })}
                    <Button 
                        onClick={() => handleAddGoal(monthOfYear!)} 
                        className="opacity-0 group-hover/goal:opacity-100 w-full flex items-center gap-2">
                        <img className="size-4" src={Plus} alt="plus" />
                        Add goal
                    </Button>
                </div>
            </div>
        ))}
    </>
}

export default MonthBoardLayout