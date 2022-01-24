import React from 'react';
import s from './Header.module.css'
import sss from './pngwing.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={sss} alt='logo' />
            <div>World of Geek</div>
        </header>
    );
}

export default Header;