import style from './profileMenu.module.css'
import ava from '../../../image/ava.png'
import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";

export const ProfileMenu = () => {
    const [user, setUser] = useState({})
    
    // Инициализация данных значения пользователя
    useEffect(() => {
        const userId = localStorage.getItem('UserId');
        
        // Получение id пользователя по токену
        fetch(`http://localhost:7135/user/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('Token')
            }
        })
            // Инициализация данных пользователя
            .then(reponse => setUser( reponse.json()))
            // Обработка исключения
            .catch(error => console.log(error))
    }, [])
    
    const changeUserSettings = async (e) => {
        e.preventDefault()

        var userModel =
            {
                name: document.getElementById('nameId').value ?? "",
                lastName: document.getElementById('lastNameId').value ?? "",
                sureName: document.getElementById('sureNameId').value ?? "",
                phone: document.getElementById('phoneId').value ?? "",
                email: document.getElementById('emailId').value ?? ""
            }
            
            let response = await fetch(`http://localhost:7135/user/${user.UserId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify(userModel)
            })

        let data = await response.json()
        if (!response.ok)
        {
            Swal.fire(
                {
                    title: "Информация",
                    text: data.join('\n'),
                    icon: 'error',
                    confirmButtonText: "OK"
                }
            )
        }
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
                            <li><input id='nameId' value={user.name} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='lastNameId' value={user.lastName} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='sureNameId' value={user.sureName} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='phoneId' value={user.phone} className={style.userInfoSubListItem} type={'tel'}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                />
                            </li>
                            <li><input id='emailId' value={user.email} className={style.userInfoSubListItem} type={'email'}/></li>
                            <li><input id='userId' value={user.userId} style={{display: 'none'}} type={'text'}/></li>
                        </form>
                    </ul>

                </div>
                <div className={style.buttonsList}>
                    <button onClick={changeUserSettings} className={style.button}>Изменить</button>
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