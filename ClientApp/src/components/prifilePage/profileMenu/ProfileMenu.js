import style from './profileMenu.module.css'
import {NavLink} from 'react-router-dom';

export const ProfileMenu = () => {
    return (
        <div >
            <nav className={style.main}>
                <span>
                    <NavLink to='/profile'>Профиль</NavLink>
                </span>
                <span>
                     <NavLink to='/profile/garden'>Мой огород</NavLink>
                </span>
                <span>
                    <NavLink to='/profile/settings'>Настройки</NavLink>
                </span>
                <span>Выход</span>
            </nav>
        </div>
    )
}