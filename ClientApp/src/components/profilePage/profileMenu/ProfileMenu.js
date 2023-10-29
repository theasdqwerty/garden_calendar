import style from './profileMenu.module.css'
import {NavLink} from 'react-router-dom';

export const ProfileMenu = () => {
    return (
        <div>
            <div id="Profile" className={style.main}>
                <NavLink to={'/profile'}>
                    <span className={style.main}>Профиль</span>
                </NavLink>
            </div>

            <div id="Paris" class="tabcontent">
                <h1>Paris</h1>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" class="tabcontent">
                <h1>Tokyo</h1>
                <p>Tokyo is the capital of Japan.</p>
            </div>

            <div id="Oslo" class="tabcontent">
                <h1>Oslo</h1>
                <p>Oslo is the capital of Norway.</p>
            </div>

            <button class="tablink" onclick="openCity('London', this, 'red')" id="defaultOpen">London</button>
            <button class="tablink" onclick="openCity('Paris', this, 'green')">Paris</button>
            <button class="tablink" onclick="openCity('Tokyo', this, 'blue')">Tokyo</button>
            <button class="tablink" onclick="openCity('Oslo', this, 'orange')">Oslo</button>
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