import axios from "axios"

export const Api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com",
    timeout: 6000
})