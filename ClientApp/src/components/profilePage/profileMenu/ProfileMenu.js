import style from './profileMenu.module.css'
import {NavLink} from 'react-router-dom';
import ava from '../../../image/ava.png'
import React, { useState } from 'react';

export const ProfileMenu = () => {
    const [input, setInput] = useState('')
    const onClick = () => {
        alert('Отправь данные')
    }

    return (
        <div className={style.mainSection}>
            <div className={style.userView}>
                <h1 className={style.viewHeader}>
                    пользователь
                </h1>
                <div className={style.viewAvatar}>
                    <button className={style.avatarButton}>
                        <img className={style.avatar} src={ava} alt={'аватар пользователя'}/>
                    </button>

                </div>
                <div className={style.ViewData}>
                    Гарольд Генадьевич
                </div>

            </div>
            <div className={style.userInfo}>
                <h1 className={style.viewHeader}>
                    пользователь
                </h1>
                <h4>
                    Информация о профиле:
                </h4>
                <div className={style.userInfoLists}>
                    <ul className={style.userInfoList}>
                        <li className={style.userInfoListItem}>Телефон:</li>
                        <li className={style.userInfoListItem}>Email:</li>
                        <li className={style.userInfoListItem}>Имя:</li>
                        <li className={style.userInfoListItem}>Фамилия:</li>
                        <li className={style.userInfoListItem}>Отчество:</li>
                    </ul>
                    <ul className={style.userInfoList}>
                        <form>
                            <li>
                                <input className={style.userInfoSubListItem}
                                    type={'tel'}
                                    // pattern={`^((8|+7)[- ]?)?((?{3})?[- ]?)?[- ]{7,10}$`}
                                    defaultValue={'8-666-666-13-13'}
                                />
                            </li>
                            <li>
                                <input className={style.userInfoSubListItem}
                                    type={'email'}
                                    defaultValue={'ded@gmail.com'}
                                />

                            </li>
                            <li>
                                <input className={style.userInfoSubListItem}
                                    type={'text'}
                                       defaultValue={'Гарольд'}
                                />
                            </li>
                            <li>
                                <input className={style.userInfoSubListItem}
                                    type={'text'}
                                       defaultValue={'Пупкин'}
                                />
                            </li>
                            <li>
                                <input className={style.userInfoSubListItem}
                                    type={'text'}
                                       defaultValue={'Генадьевич'}
                                />
                            </li>
                        </form>
                    </ul>

                </div>
                <div className={style.buttonsList}>
                    <button onClick={onClick} className={style.button}>Изменить</button>
                    <button className={style.button}>Сохранить</button>
                    <button className={style.button}>Отмена</button>
                </div>

            </div>

        {/*    <div>*/}
        {/*        <nav className={style.main}>*/}
        {/*            <NavLink to='/profile'> <span className={style.link}> Профиль </span>*/}
        {/*            </NavLink>*/}
        {/*            <NavLink to='/profile/garden'>*/}
        {/*                <span className={style.link}>   Мой огород  </span>*/}
        {/*            </NavLink>*/}
        {/*            <NavLink to='/profile/settings'>*/}
        {/*                <span className={style.link}>  Настройки </span>*/}
        {/*            </NavLink>*/}
        {/*            <span className={style.link}>Выход</span>*/}
        {/*        </nav>*/}
        {/*    </div>*/}
        </div>
    )
}


// export const ProfileMenu = () => {
//     return (
//         <div>
//             <nav className={style.main}>
//                 <NavLink to='/profile'>
//                         <span className={style.link}> Профиль </span>
//                 </NavLink>
//                 <NavLink to='/profile/garden'>
//                           <span className={style.link}>   Мой огород  </span>
//                 </NavLink>
//                 <NavLink to='/profile/settings'>
//                          <span className={style.link}>  Настройки </span>
//                 </NavLink>
//                 <span className={style.link}>Выход</span>
//             </nav>
//         </div>
//     )
// }