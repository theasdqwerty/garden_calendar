import React, {Component} from 'react';
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

export class Login extends Component {
    static displayName = Login.name;
    
    render() {
        return(
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="/notfound">Forgot your password?</a></p>
                            <p className='ms-5'>Don't have an account?<a href="/registration" class="link-info">Register here</a></p>
                        </div>
                    </MDBCol>

                    <MDBCol sm='6' className='d-none d-sm-block px-0'>
                        <img src={logo}
                             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
