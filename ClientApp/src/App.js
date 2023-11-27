import React, {Component, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

const App = () => 
{
    const [isAutification, setAutification] = useState(localStorage.getItem('accessToken') !== null)
    
    return (
      <Layout isAutification = {isAutification} setAutification = {setAutification}>
        <Routes>
          {AppRoutes.map((route, index) => {
              
            const { element, id, ...rest } = route;
            if (id === 'loginPage')
                return <Route key={index} {...rest} element={element({isAutification, setAutification})}/>
                              
            return <Route key={index} {...rest} element={element} />
          })}
        </Routes>
      </Layout>
    );
}

export default App