import type { Task } from "@/types/Task"

export type Goal = {
    id:number,
    title:string,
    date:Date,
    tasks:Task[],
}