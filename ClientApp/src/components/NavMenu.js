import React, {Component, useState} from 'react';
import {NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import styleNavMenu from './NavMenu.module.css'
import  '../fonts/MarckScript-Regular.ttf'

export const NavMenu = ({isAutification, setAutification}) => {
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userId')
        
        setAutification(localStorage.getItem('accessToken') !== null)
    }

    return (
        <header className={styleNavMenu.header}>
            <div className={styleNavMenu.mainContainer}>
                <div className={styleNavMenu.titleContainer}>
                    <h1 className={`${styleNavMenu.title}`} >
                        <a className={`${styleNavMenu.title}`} href='/'>
                            Календарь садовода
                        </a>
                    </h1>
                </div>
                <div className={styleNavMenu.navContainer}>
                    <div className={styleNavMenu.ulContainer}>
                        {/*<button className={styleNavMenu.listElement}>*/}
                        {/*   <NavLink tag={Link}  to="/">Домой</NavLink>*/}
                        {/*</button>*/}
                        {/*<button className={styleNavMenu.listElement}>*/}
                        {/*    <NavLink tag={Link} to="/profile/garden">Мой огород</NavLink>*/}
                        {/*</button>*/}
                        {/*<button className={styleNavMenu.listElement}>*/}
                        {/*    <NavLink tag={Link} to="/profile">Профиль</NavLink>*/}
                        {/*</button>*/}
                        {
                            isAutification ?
                                (
                                    <>
                                        <button className={styleNavMenu.listElement}>
                                            <NavLink tag={Link} to="/profile/garden">Мой огород</NavLink>
                                        </button>
                                        <button className={styleNavMenu.listElement}>
                                            <NavLink tag={Link} to="/profile">Профиль</NavLink>
                                        </button>
                                        <button onClick={logout} className={styleNavMenu.listElement}>
                                            <NavLink tag={Link} to="/">Выйти</NavLink>
                                        </button>
                                    </>
                                ):
                                (
                                    <>
                                        <button className={styleNavMenu.listElement}>
                                            <NavLink tag={Link} to="/login">Войти</NavLink>
                                        </button>
                                        <button className={styleNavMenu.listElement}>
                                            <NavLink tag={Link} to="/registration">Регистрация</NavLink>
                                        </button>
                                    </>
                                )
                        }
                        {/*<button className={styleNavMenu.listElement}>*/}
                        {/*    {isAutification ? */}
                        {/*        <NavLink tag={Link} className={` text-dark`} to="/profile">Профиль</NavLink> : */}
                        {/*        <NavLink tag={Link} className={` text-dark`} to="/registration">Регистрация </NavLink>}*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </header>
    );
}
