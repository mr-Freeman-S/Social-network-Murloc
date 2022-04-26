import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFollowing,
    toggleIsLoadingAC,
    unfollowAC,
    userType
} from "../../redux/user-reducer";
import {getUsersAPI} from "../../api/api";


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsLoading(true)
        getUsersAPI(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    render() {
        const onChangeCurrentPage = (value: number) => {
            this.props.setCurrentPage(value)
            this.props.toggleIsLoading(true)
            getUsersAPI(this.props.pageSize, value).then(data => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(data.items)
            })
        }
        return <Users totalUsers={this.props.totalUsers}
                      currentPage={this.props.currentPage}
                      followCallback={this.props.followCallback}
                      onChangeCurrentPage={onChangeCurrentPage}
                      unfollowCallback={this.props.unfollowCallback}
                      usersData={this.props.usersData}
                      pageSize={this.props.pageSize}
                      isLoading={this.props.isLoading}
                      toggleIsFollowing={this.props.toggleIsFollowing}
                      followIsProgress={this.props.followIsProgress}

        />
    }
}


type mapStateToPropsType = {
    usersData: Array<userType>
    totalUsers: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    followIsProgress: Array<number>

}
type mapDispatchToProps = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    toggleIsLoading: (isLoading: boolean) => void
    toggleIsFollowing: (id: number, isFetching: boolean) => void
}
export type UsersContainerType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersData: state.userPage.users,
        totalUsers: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        pageSize: state.userPage.pageSize,
        isLoading: state.userPage.isLoading,
        followIsProgress: state.userPage.followIsProgress
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
        },
        toggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading))
        },
        toggleIsFollowing: (id: number, isFetching: boolean) => {
            dispatch(toggleIsFollowing(id, isFetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);