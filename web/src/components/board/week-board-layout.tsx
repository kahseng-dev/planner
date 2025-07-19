import { DateTime, Interval } from "luxon"

import Tag from "../../components/tag"
import Button from "../../components/button"
import GoalList from "../../components/goal-list"
import Plus from "../../assets/icons/plus.svg"
import { useHorizontalScroll } from "../../utils/useHorizontalScroll"

import type { Goal } from "../../types/Goal"

interface WeekBoardLayoutProps {
    goals:Goal[]
}

const WeekBoardLayout = ({ goals }:WeekBoardLayoutProps) => {

    const today = DateTime.local()

    const firstDayOfActiveWeek = today.startOf("week")

    const daysOfWeek = Interval.fromDateTimes(
        firstDayOfActiveWeek.startOf("week"), 
        firstDayOfActiveWeek.endOf("week")
    ).splitBy({ day: 1 }).map(day => day.start)

    const horizontalScrollRef = useHorizontalScroll()

    return (
        <div 
            ref={horizontalScrollRef}
            className="flex flex-row h-full overflow-x-scroll">
            { daysOfWeek.map((dayOfWeek, index) => (
                <div 
                    key={index}
                    className="group/goal p-4 min-w-1/3 border-r border-gray-200 overflow-y-scroll">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="text-neutral-800">{dayOfWeek?.weekdayLong}</p>
                        { dayOfWeek?.toISODate() == today.toISODate() && <Tag text="today" /> }
                    </div>
                    <div className="flex flex-col gap-4">
                        { goals.map(goal => {
                            let createdDateTime = DateTime.fromJSDate(goal.createdDateTime)
                            return dayOfWeek?.toISODate() === createdDateTime.toISODate() && <GoalList key={goal.id} goal={goal} />
                        })}
                        <Button className="opacity-0 group-hover/goal:opacity-100 w-full flex items-center gap-2">
                            <img className="size-4" src={Plus} alt="plus" />
                            Add goal
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeekBoardLayout