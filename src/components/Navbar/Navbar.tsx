import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" className={s.navItem} >Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={s.navItem}>Messages</NavLink></div>
            <div><NavLink to="/news" className={s.navItem}>News</NavLink></div>
            <div><NavLink to="/music" className={s.navItem}>Music</NavLink></div>
            <div><NavLink to="/settings" className={s.navItem}>Setting</NavLink></div>
        </nav>
    );
}

export default Navbar;