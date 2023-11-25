import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/homePage/Home";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {NotFound} from "./components/NotFound";
import {ProfilePage} from "./components/profilePage/ProfilePage";
import {UserProfile} from "./components/profilePage/userProfile/UserProfile";
import {UserGarden} from "./components/profilePage/userGarden/UserGarden";
import {UserSettings} from "./components/profilePage/userSettings/UserSettings";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/login',
    element: <Login/>
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
