import style from './profileMenu.module.css'
import ava from '../../../image/ava.png'
import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";

export const ProfileMenu = () => {
    const [user, setUser] = useState({})
    console.log("userModel ", user)
    
    // Инициализация данных значения пользователя
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        
        // UserModel для инициализации полей страницы аккаунта
        fetch(`https://localhost:7135/api/Users/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
            // Инициализация данных пользователя
            .then(responce => responce.ok ? responce.json() : {})
            .then(json => setUser(json))
            // Обработка исключения
            .catch(error => console.log(error))
    }, [])
    
    const changeUserSettings = async (e) => {
        e.preventDefault()
        
        var userModel =
            {
                id: document.getElementById('userId').value ?? "",
                userName: document.getElementById('userNameId').value ?? "",
                firstName: document.getElementById('firstNameId').value ?? "",
                lastName: document.getElementById('lastNameId').value ?? "",
                secondName: document.getElementById('secondNameId').value ?? "",
                phoneNumber: document.getElementById('phoneNumberId').value ?? "",
                email: document.getElementById('emailId').value ?? "",
                password: document.getElementById('passwordId').value ?? ""
            }
            console.log('changeUserSetting',  userModel)
            
        console.log("token = ", localStorage.getItem('accessToken'))

        let response = await fetch(`https://localhost:7135/api/Users/${userModel.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify(userModel)
            })

        if (!response.ok)
        {
            Swal.fire(
                {
                    title: "Информация",
                    text: "Ошибка сервера",
                    icon: 'error',
                    confirmButtonText: "OK"
                }
            )
        }
        else
        {
            console.log('Все хорошо')
        }
        
        
    }

    return (
        <div className={style.mainSection}>
            <div className={style.userView}>
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
                {/*<h1 className={style.viewHeader}>*/}
                {/*    пользователь*/}
                {/*</h1>*/}
                <h4>
                    Информация о профиле:
                </h4>
                <div className={style.userInfoLists}>
                    <ul className={style.userInfoList}>
                        <li className={style.userInfoListItem}>Имя:</li>
                        <li className={style.userInfoListItem}>Фамилия:</li>
                        <li className={style.userInfoListItem}>Отчество:</li>
                        <li className={style.userInfoListItem}>Телефон:</li>
                        <li className={style.userInfoListItem}>Email:</li>
                    </ul>
                    <ul className={style.userInfoList}>
                        <form>
                            <li><input id='firstNameId' defaultValue={user.firstName ?? ""} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='lastNameId' defaultValue={user.lastName ?? ""} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='secondNameId' defaultValue={user.secondName ?? ""} className={style.userInfoSubListItem} type={'text'}/></li>
                            <li><input id='phoneNumberId' defaultValue={user.phoneNumber ?? ""} className={style.userInfoSubListItem} type={'tel'}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                />
                            </li>
                            <li><input id='emailId' defaultValue={user.email ?? ""} className={style.userInfoSubListItem} type={'email'}/></li>
                            <li><input id='userId' defaultValue={user.id ?? ""} style={{display: 'none'}} type={'text'}/></li>
                            <li><input id='passwordId' defaultValue={user.password ?? ""} style={{display: 'none'}} type={'text'}/></li>
                            <li><input id='userNameId' defaultValue={user.userName ?? ""} style={{display: 'none'}} type={'text'}/></li>
                        </form>
                    </ul>

                </div>
                <div className={style.buttonsList}>
                    {/*<button className={style.button}>Изменить</button>*/}
                    <button onClick={changeUserSettings} className={style.button}>Сохранить</button>
                    {/*<button className={style.button}>Отмена</button>*/}
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