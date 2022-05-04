import {v1} from "uuid";
import {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {getProfile, getStatus, updateStatus} from "../api/api";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = "CHANGE-NEW-POST"
const CHANGE_PROFILE = "CHANGE_PROFILE"
const SET_STATUS = 'SET_STATUS'

export type postType = {
    id: string
    post: string
    likeCount: number
}
export type ProfileType = {
    "aboutMe": null | string,
    "contacts": {
        'dqwd': string
        "facebook": null | string,
        "website": null | string,
        "vk": null | string,
        "twitter": null | string,
        "instagram": null | string,
        "youtube": null | string,
        "github": null | string,
        "mainLink": null | string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null | boolean,
    "fullName": null | string,
    "userId": number,
    "photos": {
        "small": null | string,
        "large": null | string
    }
}
type initialStateType = {
    profile: null | ProfileType
    postData: Array<postType>
    newPost: string
    status:string
}

let initialState: initialStateType = {
    profile: null,
    postData: [
        {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
        {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
        {id: v1(), post: "Do you like Murlok?", likeCount: 999},
        {id: v1(), post: "i'm geek", likeCount: -1}
    ],
    newPost: '',
    status: ''
}

const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {id: v1(), post: state.newPost, likeCount: 0}

            return {...state, postData: [newPost, ...state.postData], newPost: ''}
        case CHANGE_POST:
            return {...state, newPost: action.event.currentTarget.value}
        case CHANGE_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state,status:action.setStatus}
        default:
            return state
    }
}
type ActionsTypes = addNewPostACType | changeNewPostACType | setUserProfileType | setStatusType
export type addNewPostACType = ReturnType<typeof addNewPostAC>
export type changeNewPostACType = ReturnType<typeof changeNewPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>

export const setStatus = (status:string) => ({type:SET_STATUS, setStatus:status} as const)
export const addNewPostAC = () => ({type: ADD_POST} as const)
export const changeNewPostAC = (e: ChangeEvent<HTMLInputElement>) =>
    ({type: CHANGE_POST, event: e} as const)
export const setUserProfile = (profile: ProfileType) =>
    ({type: CHANGE_PROFILE, profile} as const)
//thunks
export const getProfileThunk = (userID:number) => (dispatch:Dispatch)=>{
    if (!userID) {
        userID = 23091
    }
    getProfile(userID).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatusThunk = (userID:number) => (dispatch:Dispatch)=> {
    getStatus(userID).then(status =>
    dispatch(setStatus(status)))
}
export const updateStatusThunk = (status:string)=> (dispatch:Dispatch)=> {
    updateStatus(status).then(response => {
        if (response.resultCode === 0){
        dispatch(setStatus(status))
        }
    })
}

export default profileReducer;