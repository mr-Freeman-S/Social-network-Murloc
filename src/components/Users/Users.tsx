import React from 'react';
import {UsersPropsType} from "./ContainerUsers";
import s from './Users.module.css'

const Users = (props: UsersPropsType) => {
debugger
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: "1",
                photoURL: 'https://i.pinimg.com/474x/74/54/f4/7454f48ca380efe63151cc478aee8f01.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: "2",
                photoURL: 'https://i.pinimg.com/originals/7d/8d/ce/7d8dce037c6591d7c85d1edf4d16b1d6.jpg',
                followed: true,
                fullName: 'Andrei',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: "3",
                photoURL: 'https://miro.medium.com/max/504/0*AVD1uRFfib6ZYhsD.',
                followed: false,
                fullName: 'Slava',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div>
            {
                props.usersData.map(el => {
                    return <div key={el.id}>
                        <div><img className={s.photoUser} src={el.photoURL} alt="photo"/>
                        <h3>{el.fullName}</h3>
                            <p>{el.status}</p>
                            <div>{el.location.city} {el.location.country}</div>
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