import React from "react";
import {CircularProgress, Pagination} from "@mui/material";
import style from "./Users.module.css";
import userPhoto from "../profile/ProfileInfo/pngwing1.png";
import {userType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followOrUser} from "../../api/api";


export type UsersPropsType = {
    totalUsers: number
    currentPage: number
    followCallback: (userID: number) => void
    onChangeCurrentPage: (value: number) => void
    unfollowCallback: (userID: number) => void
    usersData: userType[]
    pageSize: number
    isLoading: boolean
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
        followed ? followOrUser("delete", id).then(data => {
                if (data.resultCode === 0) {
                    props.followCallback(id)
                }
            })
            : followOrUser("post", id).then(data => {
                if (data.resultCode === 0) {
                    props.followCallback(id)
                }
            })

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
                             alt="photo"/>
                    </NavLink>
                    <h3>{el.name}</h3>
                    <p>{el.status}</p>
                    <div>
                        <button
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