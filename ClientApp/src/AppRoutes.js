import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {NotFound} from "./components/NotFound";

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
  }
];

export default AppRoutes;
