import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/45/1c/47/451c479f1299378b9d3b10f7dd179191.png" alt='logo' />
            <div className={s.appName}>World of Murloc</div>
        </header>
    );
}

export default Header;