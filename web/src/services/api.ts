import axios from "axios";

import type { Goal } from "@/types/Goal"
import type { Task } from "@/types/Task";

const SERVER_PORT = 8081
const API_URL = `http://localhost:${SERVER_PORT}/api`

axios.defaults.baseURL = API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

interface GoalAPI {
  date:string,
  id:number,
  title:string,
  tasks:[],
}

interface TaskAPI {
  id:number,
  text:string,
  isCompleted:boolean,
}

export const getAuthToken = () => {
  return window.localStorage.getItem("auth_token")
}

export const setAuthToken = (token:string) => {
  return window.localStorage.setItem("auth_token", token)
}

export const removeAuthToken = () => {
  return window.localStorage.removeItem("auth_token")
}

export const request = (method:string, url:string, data:any):Promise<any> => {
  let token = getAuthToken()
  let headers = {}

  if (token) {
    headers = {"Authorization": "Bearer " + token}
  }

  return axios({
    method: method, 
    url: url,
    data: data,
    headers: headers,
  })
}

export const errorLog = (error:any) => {

  if (error.response) {
    console.error(error.response.data)
    console.error(error.response.status)
    return
  } 

  else if (error.request) {
    return console.error(error.request)
  }

  return console.error('Error', error.message)
}

export const getGoals = async (userId:string):Promise<Goal[]> => {
  let data:GoalAPI[] = await request("GET", "/goals/user?id=" + userId, { })
                    .then(response => {
                      return response.data
                    })
                    .catch(error => {
                      errorLog(error)
                    })

  let goals:Goal[] = []

  goals = data.map(item => {
    return { id: item.id, title: item.title, date: new Date(item.date), tasks: item.tasks }
  })

  return goals
}

export const createGoal = async (userId:string, date:string) => {
  let data:GoalAPI = await request("POST", 
                "/goals/create",
                { userId: userId, date: date })
                .then(response => {
                  return response.data
                })
                .catch(error => {
                  errorLog(error)
                })

  let goal:Goal = { id: data.id, title: data.title, date: new Date(data.date), tasks: data.tasks }

  return goal
}

export const replaceGoalTitle = async (id:number, title:string) => {
  let data:GoalAPI = await request("PUT", 
                "/goals/replace",
                { id: id, title: title })
                .then(response => {
                  return response.data
                })
                .catch(error => {
                  errorLog(error)
                })

  let goal:Goal = { id: data.id, title: data.title, date: new Date(data.date), tasks: data.tasks }

  return goal
}

export const deleteGoal = async (id:number) => {
  await request("DELETE", 
                "/goals/delete",
                { id: id })
                .catch(error => {
                  errorLog(error)
                })
}

export const getTasks = async (goalId:string):Promise<Task[]> => {
  let data:TaskAPI[] = await request("GET", "/tasks/goal?id=" + goalId, { })
                    .then(response => {
                      return response.data
                    })
                    .catch(error => {
                      errorLog(error)
                    })

  let tasks:Task[] = []

  tasks = data.map(item => {
    return { id: item.id, text: item.text, isCompleted: item.isCompleted }
  })

  return tasks
}

export const createTask = async (goalId:number) => {
    let data:TaskAPI = await request("POST", 
                "/tasks/create",
                { goalId: goalId })
                .then(response => {
                  return response.data
                })
                .catch(error => {
                  errorLog(error)
                })

  let task:Task = { id: data.id, text: data.text, isCompleted: data.isCompleted }

  return task
}

export const toggleTask = async (id:number) => {
    let data:TaskAPI = await request("PUT", 
                "/tasks/toggle",
                { id: id })
                .then(response => {
                  return response.data
                })
                .catch(error => {
                  errorLog(error)
                })

  let task:Task = { id: data.id, text: data.text, isCompleted: data.isCompleted }

  return task
}

export const replaceTaskText = async (id:number, text:string) => {
    let data:TaskAPI = await request("PUT", 
                "/tasks/replace",
                { id: id, text: text })
                .then(response => {
                  return response.data
                })
                .catch(error => {
                  errorLog(error)
                })

  let task:Task = { id: data.id, text: data.text, isCompleted: data.isCompleted }

  return task
}

export const deleteTask = async (id:number) => {
  await request("DELETE", 
              "/tasks/delete",
              { id: id })
              .catch(error => {
                errorLog(error)
              })
}
