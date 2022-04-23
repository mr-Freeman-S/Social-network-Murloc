import React from "react";
import {CircularProgress, Pagination} from "@mui/material";
import style from "./Users.module.css";
import userPhoto from "../profile/ProfileInfo/pngwing1.png";
import {userType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                        {el.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers: {'API-KEY': '70059a8d-868d-4678-9a9d-46ebe53881dd'}}).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollowCallback(el.id)
                                        }
                                    }
                                )

                            }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {withCredentials: true,headers: {'API-KEY': '70059a8d-868d-4678-9a9d-46ebe53881dd'}}).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.followCallback(el.id)
                                        }
                                    }
                                )

                            }}>Follow</button>}

                    </div>

                </div>
            })
        }
    </div>
}

export default Users;