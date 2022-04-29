import React from "react";
import {CircularProgress, Pagination} from "@mui/material";
import style from "./Users.module.css";
import userPhoto from "../profile/ProfileInfo/pngwing1.png";
import {userType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    totalUsers: number
    currentPage: number
    onChangeCurrentPage: (value: number) => void
    usersData: userType[]
    pageSize: number
    isLoading: boolean
    toggleIsFollowing: (id: number, isFetching: boolean) => void
    followIsProgress: Array<number>
    followUnfollowThunk: (action: "post"| "delete", userID: number) => void
}

const Users = (props: UsersPropsType) => {
    console.log(`USERS`)
    const pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) =>
        props.onChangeCurrentPage(page)
    const followUnfollowHandler = (followed: boolean, id: number) => {
        console.log(props.followIsProgress)
        props.toggleIsFollowing(id,true)
        followed ? props.followUnfollowThunk("delete", id)
            :  props.followUnfollowThunk("post", id)
    }
    return <div>
        <Pagination count={pagesCount} page={props.currentPage} onChange={onChangeHandler} size="large"
                    showFirstButton showLastButton/>
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
    </div>
}

export default Users;