import React, {Component, useState} from 'react';
import {NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import styleNavMenu from './NavMenu.module.css'

export const NavMenu = () => {
    const [isAuth, setIsAuth] = useState(false);
    const onClick = () => {
        setIsAuth(!isAuth);
    }
    return (
        <header className={styleNavMenu.header}>
            <div className={styleNavMenu.mainContainer}>
                {/*<div className={styleNavMenu.titleContainer}>*/}
                {/*    <Link className={`${styleNavMenu.title}`} to="/">*/}
                {/*        Календарь садовода*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <button onClick={onClick}>
                    is Auth
                </button>
                <div className={styleNavMenu.navContainer}>
                    <div className={styleNavMenu.ulContainer}>
                        <button className={styleNavMenu.listElement}>
                           <NavLink tag={Link}  to="/">Домой</NavLink>
                        </button>
                        <button className={styleNavMenu.listElement}>
                            {isAuth ? <NavLink tag={Link} className={` text-dark`} to="/profile/garden"> Мой
                                огород </NavLink> : <NavLink tag={Link} className={` text-dark`} to="/login">Войти</NavLink>}
                        </button>
                        <button className={styleNavMenu.listElement}>
                            {isAuth ? <NavLink tag={Link} className={` text-dark`} to="/profile">Профиль</NavLink> : <NavLink tag={Link} className={` text-dark`} to="/registration">
                                Регистрация </NavLink>}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
