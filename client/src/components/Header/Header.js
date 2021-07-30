import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';
import './style.scss';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        // JWT

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        
        history.push('/');
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">Savings application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/Expenses">Expenses</Nav.Link>
                        <Nav.Link as={Link} to="/History">History</Nav.Link>
                        <Nav.Link as={Link} to="/Preferences">Preferences</Nav.Link>
                    </Nav>
                    <Nav className="justyfy-content-end">
                    {user?.result ? (
                        <>
                        <Image src={user.result.imageUrl} rounded />
                        <h5 className="user-name">{user.result.name}</h5>
                        <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
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