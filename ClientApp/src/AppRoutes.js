import {Counter} from "./components/Counter";
import {FetchData} from "./components/FetchData";
import {Home} from "./components/homePage/Home";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {NotFound} from "./components/NotFound";
import {UserProfile} from "./components/profilePage/userProfile/UserProfile";
import {UserGarden} from "./components/profilePage/userGarden/UserGarden";

const AppRoutes = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/counter',
        element: <Counter/>
    },
    {
        path: '/fetch-data',
        element: <FetchData/>
    },
    {
        id: 'loginPage',
        path: '/login',
        element: (props) => {
            return <Login {...props}/>
        }
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '/notfound',
        element: <NotFound/>
    },
    {
        path: '/profile',
        element: <UserProfile/>
    },
    {
        path: '/profile/garden',
        element: <UserGarden/>
    },
    // {
    //   path: '/profile/settings',
    //   element: <ProfilePage children={<UserSettings/>}/>
    // }
];

export default AppRoutes;
