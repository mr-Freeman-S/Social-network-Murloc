import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/user-reducer";
import axios from "axios";


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    render() {
        const onChangeCurrentPage = (value: number) => {
            this.props.setCurrentPage(value)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${value}`).then(response => {
                this.props.setUsers(response.data.items)
            })
        }
        return <Users totalUsers={this.props.totalUsers}
                      currentPage={this.props.currentPage}
                      followCallback={this.props.followCallback}
                      onChangeCurrentPage={onChangeCurrentPage}
                      unfollowCallback={this.props.unfollowCallback}
                      usersData={this.props.usersData}
                      pageSize={this.props.pageSize}

        />
    }
}


type mapStateToPropsType = {
    usersData: Array<userType>
    totalUsers: number
    currentPage: number
    pageSize: number

}
type mapDispatchToProps = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}
export type UsersContainerType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersData: state.userPage.users,
        totalUsers: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        pageSize: state.userPage.pageSize
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        followCallback: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollowCallback: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalUsers: number) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);