import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    }

    const handleUserSignIn = e =>{
        e.preventDefault();
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onBlur={handleUserSignIn}>
                <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="" id="" required/>
                </div>
                <input onBlur={handlePasswordBlur} className='form-submit' type="submit" value="Login" />
                <p style={{color: "red"}}>{error?.message}</p>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;