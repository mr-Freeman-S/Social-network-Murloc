import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followUnfollowThunk,
    getUsersCurrentPage,
    getUsersThunkCreator,
    toggleIsFollowing,
    userType
} from "../../redux/user-reducer";


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }

    render() {
        const onChangeCurrentPage = (value: number) => {
            this.props.getUsersCurrentPage(value, this.props.pageSize)

        }
        return <Users totalUsers={this.props.totalUsers}
                      currentPage={this.props.currentPage}
                      onChangeCurrentPage={onChangeCurrentPage}
                      usersData={this.props.usersData}
                      pageSize={this.props.pageSize}
                      isLoading={this.props.isLoading}
                      toggleIsFollowing={this.props.toggleIsFollowing}
                      followIsProgress={this.props.followIsProgress}
                      followUnfollowThunk={this.props.followUnfollowThunk}

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
type mapDispatchToPropsType = {
    toggleIsFollowing: (id: number, isFetching: boolean) => void
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void
    getUsersCurrentPage: (valuePage: number, currentPage: number) => void
    followUnfollowThunk: (action: "post" | "delete", userID: number) => void

}
export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType


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


export default connect(mapStateToProps, {
    getUsersCurrentPage,
    getUsersThunkCreator,
    toggleIsFollowing,
    followUnfollowThunk
})(UsersContainer);