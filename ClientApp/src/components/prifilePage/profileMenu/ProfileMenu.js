import style from './profileMenu.module.css'
import {NavLink} from 'react-router-dom';

export const ProfileMenu = () => {
    return (
        <div>
            <nav className={style.main}>
                <NavLink to='/profile'>
                        <span className={style.link}> Профиль </span>
                </NavLink>
                <NavLink to='/profile/garden'>
                          <span className={style.link}>   Мой огород  </span>
                </NavLink>
                <NavLink to='/profile/settings'>
                         <span className={style.link}>  Настройки </span>
                </NavLink>
                <span className={style.link}>Выход</span>
            </nav>
        </div>
    )
}