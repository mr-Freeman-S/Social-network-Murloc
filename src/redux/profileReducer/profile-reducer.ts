import {v1} from "uuid";
import {Dispatch} from "redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../api/api";
import {AppStateType} from "../redux-store";

const ADD_POST = 'ADD-POST'
const CHANGE_PROFILE = "CHANGE_PROFILE"
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTOS = 'SET_PHOTOS'
const SET_EDIT_MODE = 'SET_EDIT_MODE'

export type postType = {
    id: string
    post: string
    likeCount: number
}
export type ProfileType = {
    "aboutMe": null | string,
    "contacts": {
        'dqwd': string | null
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
export type initialProfileStateType = {
    profile: null | ProfileType
    postData: Array<postType>
    status: string,
    isEditMode: boolean
}

let initialState: initialProfileStateType = {
    profile: null,
    postData: [
        {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
        {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
        {id: v1(), post: "Do you like Murlok?", likeCount: 999},
        {id: v1(), post: "i'm geek", likeCount: -1}
    ],
    status: '',
    isEditMode: false
}

const profileReducer = (state: initialProfileStateType = initialState, action: ActionsTypes): initialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {id: v1(), post: action.newPost, likeCount: 0}

            return {...state, postData: [newPost, ...state.postData]}
        case CHANGE_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, postData: state.postData.filter(el => el.id !== action.id)}
        case SET_EDIT_MODE:
            return {...state, isEditMode: action.isEditMode}
        case SET_PHOTOS:
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: {...action.photos}}}
        default:
            return state
    }
}
type ActionsTypes =
    addNewPostACType
    | setUserProfileType
    | setStatusType
    | deletePostType
    | setPhotoSuccessType
    | setIsEditModeType
export type addNewPostACType = ReturnType<typeof addNewPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>
export type deletePostType = ReturnType<typeof deletePostAC>
export type setPhotoSuccessType = ReturnType<typeof setPhotoSuccess>
export type setIsEditModeType = ReturnType<typeof setEditMode>

export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const addNewPostAC = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const deletePostAC = (id: string) => ({type: DELETE_POST, id} as const)
export const setPhotoSuccess = (photos: any ) => ({type: SET_PHOTOS, photos} as const)
export const setUserProfile = (profile: ProfileType) => ({type: CHANGE_PROFILE, profile} as const)
export const setEditMode = (isEditMode: boolean) => ({type: SET_EDIT_MODE, isEditMode} as const)

//thunks
export const getProfileThunk = (userID: number) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    if (!userID) {
        userID = getState().auth.id as number
    }
    const response = await getProfile(userID)
    dispatch(setUserProfile(response))
}
export const getStatusThunk = (userID: number) => async (dispatch: Dispatch) => {
    const response = await getStatus(userID)
    dispatch(setStatus(response))
}
export const updateStatusThunk = (status: string) => async (dispatch: Dispatch) => {
    const response = await updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setPhotos = (photo: any) => async (dispatch: Dispatch) => {
    const response = await savePhoto(photo)
    if (response.resultCode === 0) {
        debugger
        dispatch(setPhotoSuccess(response.data.photos))
    }
}


export default profileReducer;