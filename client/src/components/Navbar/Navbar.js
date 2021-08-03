import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import './style.scss';

import { LOGOUT } from '../../constants/actionTypes';


const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    
    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/Auth');
        setUser(null);
    };
    
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">Savings application</Navbar.Brand>
                    {user &&
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/Expenses">Expenses</Nav.Link>
                        <Nav.Link as={Link} to="/History">History</Nav.Link>
                        <Nav.Link as={Link} to="/Preferences">Preferences</Nav.Link>
                    </Nav>
                    }
                    <Nav className="justyfy-content-end">
                    {user ? (
                        <>
                        <Image src={user.result.imageUrl} rounded />
                        <h5 className="user-name">{user.result.name}</h5>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                            )
                        :
                        <Nav.Link as={Link} to="/Auth">Sign in</Nav.Link>
                    }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
 
export default Header;