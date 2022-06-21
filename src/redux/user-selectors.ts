import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.userPage.users

}
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

