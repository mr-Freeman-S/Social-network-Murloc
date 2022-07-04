import {followOrUser, getUsersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../untils/object-helpers";

export type userType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string | null,
    "photos": {
        "small": string | null,
        "large": string | null
    },
    "status": string | null,
    "followed": boolean
}

export type initialStateType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    followIsProgress: Array<number>
}

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isLoading: true,
    followIsProgress: []

}

export const userReducer = (state: initialStateType = initialState, action: allTypeReducer): initialStateType => {
    switch (action.type) {
        case FOLLOW:

            return{...state,users: updateObjectInArray(state.users,action.payload.userID,"id",{followed:true})}
        case UNFOLLOW:
            return{...state,users: updateObjectInArray(state.users,action.payload.userID,"id",{followed:false})}
        case TOGGLE_FOLLOW_IS_PROGRESS:
            return {
                ...state,
                followIsProgress:
                    action.payload.isFetching
                        ? [...state.followIsProgress, action.payload.id]
                        : state.followIsProgress.filter(el => el !== action.payload.id)
            }
        case TOGGLE_IS_LOADING:
        case SET_TOTAL_USERS_COUNT:
        case SET_CURRENT_PAGE:
        case USERS_SET:
            return {...state, ...action.payload}

        default:
            return state
    }
}

export type allTypeReducer =
    followACType
    | unfollowACType
    | setUsersACType
    | setTotalUsersCountACType
    | setCurrentPageACType
    | toggleIsLoadingType
    | toggleIsFollowingType;
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsers>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type toggleIsLoadingType = ReturnType<typeof toggleIsLoading>
export type toggleIsFollowingType = ReturnType<typeof toggleIsFollowing>

const FOLLOW = "user/FOLLOW"
const UNFOLLOW = 'user/UNFOLLOW'
const USERS_SET = 'user/USERS_SET'
const SET_TOTAL_USERS_COUNT = "user/SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "user/SET_CURRENT_PAGE"
const TOGGLE_IS_LOADING = "user/TOGGLE_IS_LOADING"
const TOGGLE_FOLLOW_IS_PROGRESS = 'user/TOGGLE_FOLLOW_IS_PROGRESS'

export const followAC = (userID: number) => {
    return {type: FOLLOW, payload: {userID: userID} as const} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, payload: {userID: userID} as const} as const
}
export const setUsers = (users: userType[]) => {
    return {type: USERS_SET, payload: {users: users}} as const
}
export const setTotalUsersCount = (TotalUsers: number) => {
    return {type: SET_TOTAL_USERS_COUNT, payload: {totalUsersCount: TotalUsers}} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}} as const
}
export const toggleIsLoading = (isLoading: boolean) => {
    return {type: TOGGLE_IS_LOADING, payload: {isLoading}} as const
}
export const toggleIsFollowing = (id: number, isFetching: boolean) => {
    return {type: TOGGLE_FOLLOW_IS_PROGRESS, payload: {id, isFetching}} as const
}

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true))
    const response = await getUsersAPI(pageSize, currentPage)
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount))

}
export const getUsersCurrentPage = (valuePage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setCurrentPageAC(valuePage))
    dispatch(toggleIsLoading(true))
    const response = await getUsersAPI(pageSize, valuePage)
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(response.items))
}
export const followUnfollowThunk = (action: "post" | "delete", userID: number) => async (dispatch: Dispatch) => {
    const response = await followOrUser(action, userID)
    if (response.resultCode === 0) {
        dispatch(followAC(userID))
        dispatch(toggleIsFollowing(userID, false))
    }
}

