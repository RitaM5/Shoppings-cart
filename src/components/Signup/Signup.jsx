import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('');
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be six characters or longer');
            return;
        }
        createUser(email,password)
        .then(result =>{
          const loggedUser = result.user;
          form.reset();
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className="form-container">
            <div className="content">
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm"> Confirm Password</label>
                        <input type="password" name="confirm" id="" required></input>
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className="form-submit" type="submit" value="Sign Up" required />
                </form>
                <p className="link-form">
                    Already have an account ? <Link className="form-link" to="/login">Please login</Link>
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

export default Signup;