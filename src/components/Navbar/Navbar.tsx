import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import profileImg from './NavButton/user.png'
import messageImg from './NavButton/email.png'
import newsImg from './NavButton/news.png'
import musicImg from './NavButton/music.png'
import settingImg from './NavButton/gear.png'
import {SidebarType} from "../../redux/store";
import SideBar from "./SideBar";


type NavbarPropsType = {
}

const Navbar = (props:NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" className={s.navItem} ><img src={profileImg}/>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={s.navItem}><img src={messageImg}/>Messages</NavLink></div>
            <div><NavLink to="/news" className={s.navItem}><img src={newsImg}/>News</NavLink></div>
            <div><NavLink to="/music" className={s.navItem}><img src={musicImg}/>Music</NavLink></div>
            <div><NavLink to="/settings" className={s.navItem}><img src={settingImg}/>Setting</NavLink></div>
            <div><NavLink to="/users" className={s.navItem}><img src={settingImg}/>Users</NavLink></div>
            <SideBar />
        </nav>
    );
}

export default Navbar;