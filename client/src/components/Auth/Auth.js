import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Form, Row, Col, Button} from 'react-bootstrap';
import './style.scss';

const Auth = () => {
    const [ showSignIn, setShowSignIn ] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const googleSuccess = async (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId;

        try {
            history.push('/Dashboard');
            dispatch({ type: 'AUTH', data: { result, token } });
        } catch(err) {
            console.log(`Error while google success: `);
            console.log(err);
        }

    };

    const googleFailure = (error) => {
        console.log(`Google auth error.`);
        console.log(error);
    };

    const changeMode = () => setShowSignIn(prevShowSignIn => !prevShowSignIn);

    return (
        <Container className="pt-5">
            <h1 className="text-center py-3">{ showSignIn ? `Sign in` : `Sign up` }</h1>
            <Form className="">
            { !showSignIn && <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalEmail">
                <Form.Label column sm={1}>
                    First name
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="text" placeholder="first name" />
                </Col>
            </Form.Group> }
            <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalEmail">
                <Form.Label column sm={1}>
                    Email
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalPassword">
                <Form.Label column sm={1}>
                    Password
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            { !showSignIn && <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalPassword">
                <Form.Label column sm={1}>
                    Repeat password
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="password" placeholder="repeat password" />
                </Col>
            </Form.Group> }
            <Form.Group as={Row} className="mb-3 justify-content-sm-center">
                <Col sm={3}>
                    <Button type="submit" className="">
                        { showSignIn ? `Sign in` : `Sign up` }
                    </Button>
                    
                    <GoogleLogin
                        clientId="181058069431-redfnmfth6m0qftlaa3bi1dvhe5s1vh7.apps.googleusercontent.com"
                        render={renderProps => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</Button>
                        )}
                        buttonText="Login"
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    />

                    <Button onClick={changeMode}>
                        { showSignIn ? `Dont have an account? Sign up` : `Have an account? Sign in` }
                    </Button>
                </Col>
            </Form.Group>
            </Form>
        </Container>
    );
}

export default Auth;