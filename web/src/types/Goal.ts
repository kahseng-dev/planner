import type { Task } from "../types/Task"

export type Goal = {
    title:string,
    createdDateTime:Date,
    tasks:Task[],
}