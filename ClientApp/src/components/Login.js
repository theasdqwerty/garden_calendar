import React, {Component} from 'react';
import './Login.css'

import logo from './../image/logo.jpg'
import {Button, Col, Container, Input, Row} from "reactstrap";

export class Login extends Component {
    static displayName = Login.name;
    
    constructor() {
        super();
        
        this.refLogin = React.createRef();
        this.refPassword = React.createRef();
        this.loginHandler = this.loginHandler.bind(this);
    }
    
    loginHandler(e)
    {
        e.preventDefault();
        
        let login = {
        }
        
        if (this.refLogin === undefined) {
            alert("Пароли не совпадают")
            return
        }
        
        alert("alert registrationHandler")
    }
    
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col sm='6'>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Вход</h3>
                            <Input className='mb-4 mx-5 w-100' placeholder='Введите свой email' label='Email address' id='formControlLogin' type='email' size="lg"/>
                            <Input className='mb-4 mx-5 w-100' placeholder='Введите свой пароль' itemID={"password"} label='Password' id='formControlPassword' type='password' size="lg"/>
                            <Button type="submit" onClick={this.loginHandler} className="mb-4 px-5 mx-5 w-100 h-auto" color='info' size='lg'>Войти</Button>
                            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="/notfound">Забыли свой пароль?</a></p>
                            <p className='ms-5'>Еще нет акаунта? <a href="/registration" className="link-info">Пора зарегистрироваться</a></p>
                        </div>
                    </Col>

                    <Col sm='6' className='d-none d-sm-block px-0'>
                        <img src={logo}
                             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
