import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import profileImg from '../../assets/NavButton/user.png'
import messageImg from '../../assets/NavButton/email.png'
import newsImg from '../../assets/NavButton/news.png'
import musicImg from '../../assets/NavButton/music.png'
import settingImg from '../../assets/NavButton/gear.png'
import SideBar from "./SideBar";


type NavbarPropsType = {}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={style.nav}>
            <div><NavLink to="/profile" className={style.navItem}><img alt="iconProfile" src={profileImg}/>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={style.navItem}><img  alt="iconMessage" src={messageImg}/>Messages</NavLink></div>
            <div><NavLink to="/news" className={style.navItem}><img alt="iconNews" src={newsImg}/>News</NavLink></div>
            <div><NavLink to="/music" className={style.navItem}><img alt="iconMusic" src={musicImg}/>Music</NavLink></div>
            <div><NavLink to="/settings" className={style.navItem}><img alt="iconSetting" src={settingImg}/>Setting</NavLink></div>
            <div><NavLink to="/users" className={style.navItem}><img alt="iconUsers" src={settingImg}/>Users</NavLink></div>
            <SideBar/>
        </nav>
    );
}

export default Navbar;