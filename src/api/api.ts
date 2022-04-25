import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {'API-KEY': '70059a8d-868d-4678-9a9d-46ebe53881dd'},
    baseURL:`https://social-network.samuraijs.com/api/1.0/`
})


export const getUsersAPI = (pageSize:number = 10, pageNum:number = 1) => {
    return  instance.get(`users?count=${pageSize}&page=${pageNum}`).then(response => response.data)
}

export const followOrUser = (action:`post`| `delete`,id:number) => {
    return instance[`${action}`](`follow/${id}`).then(response => response.data)
}

export const getProfile = (userID:number)=> {
    return instance.get(`profile/${userID}`).then(response => response.data)
}

export const getAuthMe = () => {
    return instance.get(`auth/me`).then(response=> response.data)
}