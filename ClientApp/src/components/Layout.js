import React, {useState} from 'react';
import {Container} from 'reactstrap';
import {NavMenu} from './NavMenu';

export const Layout = ({children, isAutification, setAutification}) =>
{
    return (
      <div>
        <NavMenu isAutification = {isAutification} setAutification = {setAutification} />
        <Container>
            {children}
        </Container>
      </div>
    );
}
