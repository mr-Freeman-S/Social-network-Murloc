import React from "react";
import {CircularProgress, Pagination} from "@mui/material";
import style from "./Users.module.css";
import userPhoto from "../../assets/pngwing1.png";
import {userType} from "../../redux/userReducer/user-reducer";
import {NavLink} from "react-router-dom";
import {PaginationC} from "./PaginationC";


export type UsersPropsType = {
    totalUsers: number
    currentPage: number
    onChangeCurrentPage: (value: number) => void
    usersData: userType[]
    pageSize: number
    isLoading: boolean
    toggleIsFollowing: (id: number, isFetching: boolean) => void
    followIsProgress: Array<number>
    followUnfollowThunk: (action: "post" | "delete", userID: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onChangeHandler = (page: number) =>
        props.onChangeCurrentPage(page)
    const followUnfollowHandler = (followed: boolean, id: number) => {
        followed ? props.followUnfollowThunk("delete", id)
            : props.followUnfollowThunk("post", id)
    }
    return <div>
        {props.isLoading ? <CircularProgress size={50}/>
            :
            props.usersData.map(el => {
                return <div key={el.id}>
                    <NavLink to={`/profile/${el.id}`}>
                        <img className={style.photoUser} src={el.photos.small ? el.photos.small : userPhoto}
                             alt="userPhoto"/>
                    </NavLink>
                    <h3>{el.name}</h3>
                    <p>{el.status}</p>
                    <div>
                        <button disabled={props.followIsProgress.some(id => id === el.id)}
                                onClick={() => followUnfollowHandler(el.followed, el.id)}>
                            {el.followed ? `Unfollow` : `Follow`}
                        </button>
                    </div>

                </div>
            })
        }
        <PaginationC totalItemsCount={props.totalUsers} pageSize={props.pageSize} currentItem={props.currentPage} onChangeCurrentItem={onChangeHandler} portionSize={10}/>

    </div>
}

export default Users;