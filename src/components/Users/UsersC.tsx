import React from 'react';
import {UsersPropsType} from "./ContainerUsers";
import axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../profile/ProfileInfo/pngwing1.png";

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.usersData.map(el => {
                    return <div key={el.id}>
                        <div><img className={s.photoUser}  src={el.photos.small ? el.photos.small: userPhoto } alt="photo"/>
                            <h3>{el.name}</h3>
                            <p>{el.status}</p>

                        </div>
                        <div>
                            {el.followed ? <button onClick={()=> this.props.followCallback(el.id)}>Unfollow</button>: <button onClick={()=> this.props.unfollowCallback(el.id)}>Follow</button>}

                        </div>

                    </div>
                })
            }
        </div>
    }
}

export default Users;