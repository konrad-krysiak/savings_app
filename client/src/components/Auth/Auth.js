import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import './style.css';
import { signin, signup } from '../../actions/auth';
import Navbar from '../Navbar/Navbar';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Auth = () => {
    const [ showSignIn, setShowSignIn ] = useState(true);
    const [ formData, setFormData ] = useState(initialFormData);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // if( showSignIn ) {
        //     dispatch(signin(formData, history));
        // } else {
        //     dispatch(signup(formData, history));
        // }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const changeMode = () => {
        setShowSignIn(prevShowSignIn => !prevShowSignIn);
        setFormData(initialFormData);
    }

    return (
    <div class="signup_page">

        <Navbar />

        <div class="signup_container">
            <div class="signup_box">
                { showSignIn ? <h1>Sign in</h1> : <h1>Sign up</h1> }

                { !showSignIn &&
                    <>
                        <input 
                            type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} /> 
                        <input 
                            type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} /> 
                    </> }
                <input type="text" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                { !showSignIn && 
                <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmedPassword} onChange={handleChange} /> }
                <input type="submit" name="signup_submit" value={ showSignIn ? `Sign in` : `Sign up` } onClick={handleSubmit} />

                { showSignIn &&
                <button class="social-signin google">Log in with Google+</button> }
                <div class="already">
                    <button onClick={changeMode}>
                        { showSignIn ? `Don't have an account? Sign up!` : `Have an account already? Sign in!`}
                    </button>
                </div>
            </div>
        </div>


    </div>
    );
}

export default Auth;