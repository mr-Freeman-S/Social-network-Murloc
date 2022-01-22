import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.shopify.com/s/files/1/2160/2267/t/22/assets/logo.png?v=11291551657410340719" alt='logo' />
        </header>
    );
}

export default Header;