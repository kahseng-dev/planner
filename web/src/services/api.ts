import axios from "axios";

const SERVER_PORT = 8081
const API_URL = `http://localhost:${SERVER_PORT}/api`

axios.defaults.baseURL = API_URL
axios.defaults.headers.post['Content-Type'] = "application/json"

export const getAuthToken = () => {
  return window.localStorage.getItem("auth_token")
}

export const setAuthToken = (token:string) => {
  return window.localStorage.setItem("auth_token", token)
}

export const request = (method:string, url:string, data:any) => {
  let token = getAuthToken()
  let headers = {}

  if (token) {
    headers = {"Authorization" : `Bearer ${token}`}
  }

  return axios({
    method: method, 
    headers: headers,
    url: url,
    data: data,
  })
}