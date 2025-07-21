import type { Goal } from "@/types/Goal"

const key = "local_data"

export const getData = () => {
    let storeData = window.localStorage.getItem(key)

    if (!storeData) return null

    let data:Goal[] = [...JSON.parse(storeData)]

    return data
}

export const setData = (data:Goal[]) => {
    return window.localStorage.setItem(key, JSON.stringify(data))
}