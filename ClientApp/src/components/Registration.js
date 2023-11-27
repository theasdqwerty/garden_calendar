import React, {Component} from "react";
import {Navigate} from 'react-router-dom'
import './Login.css'
import logo from './../image/logo.jpg'
import {Button, Col, Container, Input, Row} from "reactstrap";
import Swal from "sweetalert2";
import style from './Login.module.css'

export class Registration extends Component {
    static displayName = Registration.name;
    state = { navigate: false};

    constructor() {
        super();
        this.registrationRequest = this.registrationRequest.bind(this);
    }
    
    async registrationRequest(e) {
        e.preventDefault();
        
        const repeatPassword = document.getElementById('repeatPasswordId').value ?? "";

        var user = {
            userName: document.getElementById('loginId').value ?? "",
            email: document.getElementById('emailId').value ?? "",
            password: document.getElementById('passwordId').value ?? ""
        }

        if (user.password !== repeatPassword) {
            Swal.fire({
                title: "Информация",
                text: "Пароли не совпадают",
                icon: "warning"
            })
            return
        }

        let response = await fetch('https://localhost:7135/api/Authentication/Registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        var jsonData = await response.json()
        if (!response.ok) {
            Swal.fire({
                title: "Информация",
                text: jsonData.join('\n'),
                icon: "error"
            });
            return
        }

        localStorage.setItem('accessToken', jsonData.token)
        localStorage.setItem('userId', jsonData.userId)
        
        this.setState({navigate: true});
    }

    render() {
        let {navigate} = this.state;
        if (navigate)
            return (<Navigate to="/profile" replace={true} />)
        else
        return (
            <Container fluid>
                <Row className={style.loginRow}>
                    <Col sm='5'>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Регистрация</h3>
                            <Input placeholder="Введите свой логин" className={`${style.input} mb-4 mx-5 w-100`} ref={this.refLogin} label='Login'
                                      id='loginId' type='text'/>
                            <Input placeholder="Введите ваш адрес электронной почты" className={`${style.input} mb-4 mx-5 w-100`} ref={this.refEmail} label='Email address'
                                      id='emailId' type='email'/>
                            <Input placeholder="Введите ваш пароль" className={`${style.input} mb-4 mx-5 w-100`} ref={this.refPassword} label='Password'
                                      id='passwordId' type='password'/>
                            <Input placeholder="Повторите свой пароль" className={`${style.input} mb-4 mx-5 w-100`} ref={this.refRepeatPassword}
                                      label='Confirm your password' id='repeatPasswordId' type='password'/>
                            <Button onClick={this.registrationRequest} type={"submit"} className={`${style.button} mb-4 px-5 mx-5 w-100`}
                                    color='info'>Регистрация</Button>
                        </div>
                    </Col>
                    <Col sm='4' className='d-none d-sm-block px-0'>
                        <img src={logo}
                             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
