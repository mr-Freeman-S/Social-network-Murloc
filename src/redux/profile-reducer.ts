import {v1} from "uuid";
import {ChangeEvent} from "react";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = "CHANGE-NEW-POST"
const CHANGE_PROFILE = "CHANGE_PROFILE"

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
}

let initialState: initialStateType = {
    profile: null,
    postData: [
        {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
        {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
        {id: v1(), post: "Do you like Murlok?", likeCount: 999},
        {id: v1(), post: "i'm geek", likeCount: -1}
    ],
    newPost: ''
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
        default:
            return state
    }
}
type ActionsTypes = addNewPostACType | changeNewPostACType | setUserProfileType
export type addNewPostACType = ReturnType<typeof addNewPostAC>
export type changeNewPostACType = ReturnType<typeof changeNewPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>


export const addNewPostAC = () => ({type: ADD_POST} as const)
export const changeNewPostAC = (e: ChangeEvent<HTMLInputElement>) =>
    ({type: CHANGE_POST, event: e} as const)
export const setUserProfile = (profile: ProfileType) =>
    ({type: CHANGE_PROFILE, profile} as const)

export default profileReducer;