import type { Goal } from "@/types/Goal"

const key = "local_data"

export const getStore = () => {
    let storeData = window.localStorage.getItem(key)

    if (!storeData) return null

    let data:Goal[] = JSON.parse(storeData)
    
    data.map(item => item.date = new Date(item.date))

    return data
}

export const setStore = (data:Goal[]) => {
    return window.localStorage.setItem(key, JSON.stringify(data))
}