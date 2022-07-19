import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {userType} from "./user-reducer";

 const getUsersSelector = (state: AppStateType): userType[] => {
    return state.userPage.users
}
// add reselect for learn, use fake filter
export const getUsers = createSelector(getUsersSelector,(users: userType[]) => {
    return users.filter(() => true)
})
export const getTotalUsers = (state: AppStateType) => {
    return state.userPage.totalUsersCount

}
export const getCurrentPage = (state: AppStateType) => {
    return state.userPage.currentPage

}
export const getPageSize = (state: AppStateType) => {
    return state.userPage.pageSize

}
export const getIsLoading = (state: AppStateType) => {
    return state.userPage.isLoading

}
export const getFollowIsProgress = (state: AppStateType) => {
    return state.userPage.followIsProgress

}

