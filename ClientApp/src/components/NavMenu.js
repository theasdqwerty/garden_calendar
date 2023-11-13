import React, { Component } from 'react';
import {  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import styleNavMenu from './NavMenu.module.css'

export class NavMenu extends Component {

  render() {
    return (
      <header className={styleNavMenu.header}>
          <div className={styleNavMenu.mainContainer}>
              <div className={styleNavMenu.titleContainer}>
                  <Link className={`${styleNavMenu.title}`} to="/">
                      Календарь садовода
                  </Link>
              </div>
              <div className={styleNavMenu.navContainer}>
                  <div className={styleNavMenu.ulContainer}>
                      <button className={styleNavMenu.listElement}>
                          <NavLink tag={Link} className={` fs-3 `} to="/">Домой</NavLink>
                      </button>
                      <button className={styleNavMenu.listElement}>
                          <NavLink tag={Link} className={`fs-3 text-dark`} to="/login">Войти</NavLink>
                      </button>
                      <button className={styleNavMenu.listElement}>
                          <NavLink tag={Link} className={`fs-3 text-dark`} to="/registration">Регистрация</NavLink>
                      </button>

                      <button className={styleNavMenu.listElement}>
                          <NavLink tag={Link} className={`fs-3 text-dark`} to="/profile">Профиль</NavLink>
                      </button>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}
