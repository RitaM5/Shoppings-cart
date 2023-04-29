import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const from = location.state?.from?.pathname || '/'
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="form-container">
            <div className="content">
                <h2 className='form-title'>login</h2>
                <form onSubmit={handleSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <span className='show-input'>
                            <input type={show ? "text" : "password"} name="password" id="" required></input>
                            <p className='eye-icon' onClick={() => setShow(!show)}>
                                filter
                            </p>
                        </span>
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className="form-submit" type="submit" value="Login" required />
                </form>
                <p className="link-form">
                    New to Ema-John ? <Link className="form-link" to="/signup">Create an account</Link>
                </p>
                <div className="others-part">
                    <div className="left-border"></div>
                    <span className="middle-part">or</span>
                    <div className="right-border"></div>
                </div>
                <div className="google-auth">
                    <button className="google-btn"><img src="https://img.icons8.com/color/48/undefined/google-logo.png" />Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;