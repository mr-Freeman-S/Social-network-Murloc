import {Dispatch} from "redux";
import {getAuthMe, login, logout} from "../api/api";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.userData, isAuthorized: action.isAuth}
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
export const setFetchingAC = (isFetching: boolean) => ({type: SET_FETCHING, isFetching} as const)
export const setAuthUserDataAC = (userData: userAuthData,isAuth:boolean) => ({type: SET_USER_DATA, userData,isAuth} as const)


export const authMeThunk = () => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    getAuthMe().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data,true))
            }
            dispatch(setFetchingAC(false))
        }
    )
}
export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authMeThunk())
        }else {

            let message = data.messages.length > 0 ? data.messages[0]: "Some error"
            dispatch(stopSubmit('login',{_error:message}))
            debugger
        }
    })
}
export const logoutThunk = () => (dispatch: any) => {
    logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(authMeThunk())
            dispatch(setAuthUserDataAC({
                "id": null, "login": null,
                "email": null
            },false))
        }
    })
}
export default authReducer;