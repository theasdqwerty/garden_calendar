import React, {Component} from 'react';
import Swal from 'sweetalert2';
import './Login.css'

import logo from './../image/logo.jpg'
import {Button, Col, Container, Input, Row} from "reactstrap";
import {Navigate} from "react-router-dom";

export class Login extends Component {
    static displayName = Login.name;
    state= {navigate: false};
    
    constructor() {
        super();
        this.refLogin = React.createRef();
        this.refPassword = React.createRef();
        this.loginHandler = this.loginHandler.bind(this);
    }
    
    async loginHandler(e)
    {
        e.preventDefault();
        
        const auchModel = {
            login: document.getElementById('loginId').value ?? "",
            password: document.getElementById('passwordId').value ?? ""
        };
        
        if (auchModel.login === "") {
            Swal.fire({
                title: "Информация",
                text: "Поле логин не заполненно",
                icon: "warning"
            });
            return;
        }

        if (auchModel.password === ""){
            Swal.fire({
                title: "Информация",
                text: "Поле пароль не заполненно",
                icon: "warning"
            });
            return;
        }
        
        // console.log(auchModel);
        // return;
        
        let response = await fetch('https://localhost:7135/api/Authentication/login', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(auchModel)
            });

        let jsonData = await response.json();
        if (!response.ok)
        {
            Swal.fire({
                title: "Иформация",
                text: jsonData.join('\n'),
                icon: "error"
            });
            return;
        }
        
        localStorage.setItem("accessToken", jsonData.token)
        localStorage.setItem("userId", jsonData.userId)
        
        this.setState({navigate: true});
    }
    
    render() {
        const {navigate} = this.state;
        if (navigate)
            return(<Navigate to="/profile" replace={true}/>)
        else
            return(
                <Container fluid>
                    <Row>
                        <Col sm='6'>
                            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                                <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Вход</h3>
                                <Input className='mb-4 mx-5 w-100' placeholder='Введите свой email' ref={this.refLogin} label='Email address' id='loginId' type='login' />
                                <Input className='mb-4 mx-5 w-100' placeholder='Введите свой пароль' ref={this.refPassword} label='Password' id='passwordId' type='password'/>
                                <Button type="submit" onClick={this.loginHandler} className="mb-4 px-5 mx-5 w-100 h-auto" color='info'>Войти</Button>
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
