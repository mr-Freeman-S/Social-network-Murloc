import React from "react";
import style from "./Header.module.css"
import logo from "./pngwing.png"
import {NavLink} from "react-router-dom";
import {CircularProgress} from "@mui/material";

export type HeaderPropsType = {
    login:string | null
    isAuthorized: boolean
    isFetching: boolean
}
const Header = (props:HeaderPropsType) => {
    return (
        <header className={style.header}>
            <div><img src={logo} alt='logo' />World of Geek</div>
            <div className={style.loginBlock}>
                {props.isFetching ? <CircularProgress size={50}/> : props.isAuthorized ? <div>{props.login}</div> :<NavLink to={'/auth'}>LOGIN</NavLink>}

            </div>
        </header>
    );
}

export default Header;