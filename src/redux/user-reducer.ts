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

type initialStateType = {
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

            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: !el.followed} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
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
        case USERSSET:
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
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type toggleIsLoadingType = ReturnType<typeof toggleIsLoadingAC>
export type toggleIsFollowingType = ReturnType<typeof toggleIsFollowing>

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const USERSSET = 'USERSSET'
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const TOGGLE_FOLLOW_IS_PROGRESS = 'TOGGLE_FOLLOW_IS_PROGRESS'

export const followAC = (userID: number) => {
    return {type: FOLLOW, payload: {userID: userID} as const} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, payload: {userID: userID} as const} as const
}
export const setUsersAC = (users: userType[]) => {
    return {type: USERSSET, payload: {users: users}} as const
}
export const setTotalUsersCountAC = (TotalUsers: number) => {
    return {type: SET_TOTAL_USERS_COUNT, payload: {totalUsersCount: TotalUsers}} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}} as const
}
export const toggleIsLoadingAC = (isLoading: boolean) => {
    return {type: TOGGLE_IS_LOADING, payload: {isLoading}} as const
}
export const toggleIsFollowing = (id: number, isFetching: boolean) => {
    return {type: TOGGLE_FOLLOW_IS_PROGRESS, payload: {id, isFetching}} as const
}

