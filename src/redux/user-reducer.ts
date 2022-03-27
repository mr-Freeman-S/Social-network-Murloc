export type userType = { id: string, followed: boolean, fullName: string, status: string, location: { city: string, country: string } }

type initialStateType = {
    users: Array<userType>
}

const initialState = {
    users: [
        {
            id: "1",
            photoURL: 'https://i.pinimg.com/474x/74/54/f4/7454f48ca380efe63151cc478aee8f01.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: "2",
            photoURL: 'https://i.pinimg.com/originals/7d/8d/ce/7d8dce037c6591d7c85d1edf4d16b1d6.jpg',
            followed: true,
            fullName: 'Andrei',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: "3",
            photoURL: 'https://miro.medium.com/max/504/0*AVD1uRFfib6ZYhsD.',
            followed: false,
            fullName: 'Slava',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]

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

export const followAC = (userID: string) => {
    return {type: FOLLOW, payload: {userID: userID} as const} as const
}
export const unfollowAC = (userID: string) => {
    return {type: UNFOLLOW, payload: {userID: userID} as const} as const
}
export const setUsersAC = (users: userType[]) => {
    return {type: USERSSET, payload: {users: users}} as const
}
