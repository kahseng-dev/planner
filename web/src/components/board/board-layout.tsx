import { DateTime } from "luxon"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

import Tag from "@components/tag"
import Button from "@components/button"
import GoalList from "@components/goal-list"
import Plus from "@assets/icons/plus.svg"
import { setStore, getStore } from "@/services/store"
import { getAuthToken, getGoals, createGoal } from "@/services/api"

import type { Goal } from "@/types/Goal"
import type { CustomJwtPayload } from "@/types/CustomJwtPayload"

interface BoardLayoutProps {
    timeline:string,
    dateList:(DateTime<true> | null)[],
}

const BoardLayout = ({ dateList, timeline }:BoardLayoutProps) => {

    const [ goals, setGoals ] = useState<Goal[]>([])
    const [ count, setCount ] = useState(0)

    const token = getAuthToken()
    const today = DateTime.local()

    const loadHeaders = (day:DateTime<true> | null) => {
        switch(timeline) {
            case "Day":
                return <>
                    <p className="text-neutral-800">{`${day?.day} ${day?.monthLong}`}</p>
                    { day?.toISODate() === today.toISODate() && <Tag text="today" /> }
                </>
            case "Week":
                return <>
                    <p className="text-neutral-800">{day?.weekdayLong}</p>
                    { day?.toISODate() === today.toISODate() && <Tag text="today" /> }
                </>
            case "Month":
                return <>
                    <p className="text-neutral-800">{day?.monthLong}</p>
                    { day?.toISODate() === today.toISODate() && <Tag text="current" /> }
                </>
            case "Year":
                return <>
                    <p className="text-neutral-800">{day?.year}</p>
                    { day?.year === today.year && <Tag text="current" /> }
                </>
        }
    }
    
    const handleCreateGoal = async (date:DateTime) => {
        let goal:Goal = { id: count, title:"", date:date.toJSDate(), tasks:[] }
        setCount(count + 1)

        if (token) {
            const decodedToken = jwtDecode<CustomJwtPayload>(token)
            const userId = decodedToken.id

            if (!userId) return

            goal = await createGoal(userId, goal.date.toISOString())
        }
        
        setGoals([...goals, goal])
        setStore([...goals, goal])
    }

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode<CustomJwtPayload>(token)
            const userId = decodedToken.id

            if (!userId) return
            
            getGoals(userId).then(setGoals)
        }

        let data = getStore()
        if (data) return setGoals(data)
    }, [])

    return <> 
        { dateList.map((day, index) => (
            <div 
                key={index}
                className="group/goal p-4 min-w-full md:min-w-1/3 lg:md:min-w-1/4 border-r border-gray-200 overflow-y-scroll">
                <div className="flex items-center gap-2 mb-2">
                    {loadHeaders(day)}
                </div>
                <div className="flex flex-col gap-4">
                    { goals.map(goal => {
                        let date = DateTime.fromJSDate(goal.date)

                        if (timeline === "Year") {
                            if (day?.year === date.year) {
                                return <GoalList 
                                    key={goal.id} 
                                    goal={goal} 
                                    goals={goals} 
                                    setGoals={setGoals} />
                            }
                            return
                        }

                        if (timeline === "Month") {
                            
                            if (date.year != day?.year || date.month != day?.month) return

                            return <GoalList 
                                key={goal.id} 
                                goal={goal} 
                                goals={goals} 
                                setGoals={setGoals} />
                        }

                        if (date.toISODate() === day?.toISODate()) {
                            return <GoalList 
                                key={goal.id} 
                                goal={goal}
                                goals={goals}
                                setGoals={setGoals} />
                        }
                    })}
                    <Button 
                        onClick={() => handleCreateGoal(day!)}
                        className="opacity-0 group-hover/goal:opacity-100 w-full flex items-center gap-2">
                        <img className="size-4" src={Plus} alt="plus" />
                        Add goal
                    </Button>
                </div>
            </div>
        ))}
    </>
}

export default BoardLayout