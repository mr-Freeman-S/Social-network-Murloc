import React from 'react';
import {UsersPropsType} from "./ContainerUsers";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from './../profile/ProfileInfo/pngwing1.png'

const Users = (props: UsersPropsType) => {

    if (props.usersData.length === 0) {
        debugger
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })

    }

    return (
        <div>
            {
                props.usersData.map(el => {
                    return <div key={el.id}>
                        <div><img className={s.photoUser}  src={el.photos.small ? el.photos.small: userPhoto } alt="photo"/>
                        <h3>{el.name}</h3>
                            <p>{el.status}</p>

                        </div>
                        <div>
                            {el.followed ? <button onClick={()=> props.followCallback(el.id)}>Unfollow</button>: <button onClick={()=> props.unfollowCallback(el.id)}>Follow</button>}

                        </div>

                    </div>
                })
            }
        </div>
    );
};

export default Users;