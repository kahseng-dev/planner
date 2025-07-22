import axios from "axios";

const SERVER_PORT = 8081
const API_URL = `http://localhost:${SERVER_PORT}/api`

axios.defaults.baseURL = API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

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