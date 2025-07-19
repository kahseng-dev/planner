import type { Task } from "@/types/Task"

export type Goal = {
    id:number,
    title:string,
    createdDateTime:Date,
    tasks:Task[],
}