import { DateTime } from "luxon"

import Tag from "@components/tag"
import Button from "@components/button"
import GoalList from "@components/goal-list"
import Plus from "@assets/icons/plus.svg"
import { useHorizontalScroll } from "@/utils/useHorizontalScroll"

import type { Goal } from "@/types/Goal"

interface YearBoardLayoutProps {
    goals:Goal[]
}

const YearBoardLayout = ({ goals }:YearBoardLayoutProps) => {

    const today = DateTime.local()

    const currentYear = today.year
    const count = 10
    const yearsList:number[] = []
    for (let index = currentYear; index <= (currentYear + count); index++) {
        yearsList.push(index)
    }

    const horizontalScrollRef = useHorizontalScroll()

    return (
        <div 
            ref={horizontalScrollRef}
            className="flex flex-row h-full overflow-x-scroll">
            { yearsList.map(year => (
                <div 
                    key={year}
                    className="group/goal p-4 min-w-full md:min-w-1/3 lg:md:min-w-1/4 border-r border-gray-200 overflow-y-scroll">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="text-neutral-800">{year}</p>
                        { year === currentYear && <Tag text="current" /> }
                    </div>
                    <div className="flex flex-col gap-4">
                        { goals.map(goal => {
                            let createdDateTime = DateTime.fromJSDate(goal.createdDateTime)
                            return year === createdDateTime.year && <GoalList key={goal.id} goal={goal} />
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

export default YearBoardLayout