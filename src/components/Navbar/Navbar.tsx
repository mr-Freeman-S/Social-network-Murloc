import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import profileImg from './NavButton/user.png'
import messageImg from './NavButton/email.png'
import newsImg from './NavButton/news.png'
import musicImg from './NavButton/music.png'
import settingImg from './NavButton/gear.png'
import SideBar from "./SideBar";


type NavbarPropsType = {
}

const Navbar = (props:NavbarPropsType) => {
    return (
        <nav className={style.nav}>
            <div><NavLink to="/profile" className={style.navItem} ><img src={profileImg}/>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={style.navItem}><img src={messageImg}/>Messages</NavLink></div>
            <div><NavLink to="/news" className={style.navItem}><img src={newsImg}/>News</NavLink></div>
            <div><NavLink to="/music" className={style.navItem}><img src={musicImg}/>Music</NavLink></div>
            <div><NavLink to="/settings" className={style.navItem}><img src={settingImg}/>Setting</NavLink></div>
            <div><NavLink to="/users" className={style.navItem}><img src={settingImg}/>Users</NavLink></div>
            <SideBar />
        </nav>
    );
}

export default Navbar;