import { DateTime, Interval } from "luxon"

import { useHorizontalScroll } from "../../utils/useHorizontalScroll"

import type { Goal } from "../../types/Goal"

interface MonthBoardLayoutProps {
    goals:Goal[]
}

const MonthBoardLayout = ({ goals }:MonthBoardLayoutProps) => {

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
        </div>
    )
}

export default MonthBoardLayout