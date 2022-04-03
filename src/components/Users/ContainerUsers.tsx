import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/user-reducer";

type mapStateToPropsType = {
    usersData: Array<userType>
}
type mapDispatchToProps = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: Array<userType>) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {usersData: state.userPage.users}
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
    return {
        followCallback: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollowCallback: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);