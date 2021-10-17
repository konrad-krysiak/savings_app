import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


import './style.css';

import { LOGOUT } from '../../constants/actionTypes';


const Navbar = () => {
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const location = useLocation();
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    
    // const logout = () => {
    //     dispatch({ type: LOGOUT });
    //     history.push('/Auth');
    //     setUser(null);
    // };
    
    // useEffect(() => {
    //     const token = user?.token;
    //     if (token) {
    //         const decodedToken = decode(token);
    //         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    //     }

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [location]);

    return (
        <div class="navbar">
            <div class="navbar-brand">
                Savings_app
            </div>
            <ul class="item-container">
                <li class="nav-item">
                    <Link to='Auth' >Sign in</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;