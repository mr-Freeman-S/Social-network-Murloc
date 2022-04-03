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
}

const initialState = {
    users: []

}

export const userReducer = (state: initialStateType = initialState, action: allTypeReducer): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        case USERSSET:
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return state
    }
}

export type allTypeReducer = followACType | unfollowACType | setUsersACType
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const USERSSET = 'USERSSET'

export const followAC = (userID: number) => {
    return {type: FOLLOW, payload: {userID: userID} as const} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, payload: {userID: userID} as const} as const
}
export const setUsersAC = (users: userType[]) => {
    return {type: USERSSET, payload: {users: users}} as const
}
