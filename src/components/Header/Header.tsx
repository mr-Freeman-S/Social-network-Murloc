import React from 'react';
import style from './Header.module.css'
import logo from './pngwing.png'

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt='logo' />
            <div>World of Geek</div>
        </header>
    );
}

export default Header;