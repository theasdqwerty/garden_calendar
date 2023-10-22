import React, {Component} from "react";
import {Navigate} from 'react-router-dom'
// import { browserHistory } from 'react-router-dom';
import './Login.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

import logo from './../image/logo.jpg'
import {Await, redirect} from "react-router-dom";

export class Registration extends Component {
    static displayName = Registration.name;
    state = { navigate: false};

    constructor() {
        super();

        this.refLogin = React.createRef();
        this.refEmail = React.createRef();
        this.refPassword = React.createRef();
        this.refRepeatPassword = React.createRef();
        this.registrationRequest = this.registrationRequest.bind(this);
    }
    
    async registrationRequest(e) {
        e.preventDefault();

        if (this.refRepeatPassword === undefined)
            console.log("undef")

        let repeatPassword = this.refRepeatPassword.current.value;
        var user = {
            userName: this.refLogin.current.value,
            email: this.refEmail.current.value,
            password: this.refPassword.current.value,
        }

        if (user.password !== repeatPassword) {
            alert("Пароли не совпадают")
            return
        }

        let response = await fetch('https://localhost:7135/api/Authentication/Registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            var jsonErrors = await response.json()
            let msg = jsonErrors.join('\n');
            alert(msg)
            return
        }

        var json = await response.json()
        localStorage.setItem('accessToken', json.token)
        
        this.setState({navigate: true});
    }

    render() {
        let {navigate} = this.state;
        return (
            <>
            {navigate && (
                <Navigate to="/profile" replace={true} />
            )}
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Registration</h3>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' ref={this.refLogin} label='Login'
                                      id='formControlLogin' type='text' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' ref={this.refEmail} label='Email address'
                                      id='formControlEmail' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' ref={this.refPassword} label='Password'
                                      id='formControlPassword' type='password' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' ref={this.refRepeatPassword}
                                      label='Confirm your password' id='formControlPasswordRepeat' type='password'
                                      size="lg"/>
                            <MDBBtn onClick={this.registrationRequest} type={"submit"} className="mb-4 px-5 mx-5 w-100"
                                    color='info' size='lg'>Registration</MDBBtn>
                        </div>
                    </MDBCol>

                    <MDBCol sm='6' className='d-none d-sm-block px-0'>
                        <img src={logo}
                             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}}/>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            </>
        )
    }
}
