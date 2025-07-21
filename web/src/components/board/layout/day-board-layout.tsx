import { DateTime, Interval } from "luxon"

import Tag from "@components/tag"
import Button from "@components/button"
import GoalList from "@components/goal-list"
import Plus from "@assets/icons/plus.svg"
import { useHorizontalScroll } from "@/utils/useHorizontalScroll"

import type { Goal } from "@/types/Goal"

interface DayBoardLayoutProps {
    goals:Goal[]
}

const DayBoardLayout = ({ goals }:DayBoardLayoutProps) => {

    const today = DateTime.local()

    const firstDayOfActiveMonth = today.startOf("month")

    const daysOfMonth = Interval.fromDateTimes(
        firstDayOfActiveMonth.startOf("month"), 
        firstDayOfActiveMonth.endOf("month")
    ).splitBy({ day: 1 }).map(day => day.start)

    const horizontalScrollRef = useHorizontalScroll()

    return (
        <div 
            ref={horizontalScrollRef}
            className="flex flex-row h-full overflow-x-scroll">
            { daysOfMonth.map((dayOfMonth, index) => (
                <div 
                    key={index}
                    className="group/goal p-4 min-w-full md:min-w-1/3 lg:md:min-w-1/4 border-r border-gray-200 overflow-y-scroll">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="text-neutral-800">{`${dayOfMonth?.day} ${firstDayOfActiveMonth.monthLong}`}</p>
                        { dayOfMonth?.toISODate() === today.toISODate() && <Tag text="today" /> }
                    </div>
                    <div className="flex flex-col gap-4">
                        { goals.map(goal => {
                            let date = DateTime.fromJSDate(goal.date)

                            if (date.toISODate() == dayOfMonth?.toISODate()) {
                                return <GoalList key={goal.id} goal={goal} />
                            }
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

export default DayBoardLayout