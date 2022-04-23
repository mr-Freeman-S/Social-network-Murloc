const SET_USER_DATA = 'SET_USER_DATA'
const SET_FETCHING = 'SET_FETCHING'


export type authInitialStateType = {
    "id": null | number
    "login": null | string
    "email": null | string
    isFetching: boolean
    isAuthorized: boolean
}

let initialState: authInitialStateType = {
    "id": null,
    "login": null,
    "email": null,
    isAuthorized: false,
    isFetching: true

}

const authReducer = (state: authInitialStateType = initialState, action: ActionsTypes): authInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userData, isAuthorized: true}
        case SET_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
type ActionsTypes = setUserDataACType | setFetchingACType
export type setUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type setFetchingACType = ReturnType<typeof setFetchingAC>
export type userAuthData = {
    "id": null | number
    "login": null | string
    "email": null | string
}
export const setFetchingAC = (isFetching:boolean) => ({type: SET_FETCHING, isFetching} as const)
export const setAuthUserDataAC = (userData: userAuthData) => ({type: SET_USER_DATA, userData} as const)


export default authReducer;