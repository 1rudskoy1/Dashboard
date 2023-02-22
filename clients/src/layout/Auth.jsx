import React, {useState} from 'react';
import { auth } from '../action/user.js';
import "./main.css"

const Auth = () => {
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="auth">
            <div className="auth-form">
                <h2 className="auth-header">Авторизация</h2>
                <input name='email' value={email} onChange={(event) => {SetEmail(event.target.value)}} className="auth-form__input" type="text" placeholder="Email"/>
                <input name='password' value={password} onChange={(event) => {setPassword(event.target.value)}} className="auth-form__input" type="password" placeholder="Password"/>
                <button className="btn auth-btn" onClick={ () => {auth(email, password)}}>Войти</button>
            </div>
        </div>
    )
}

export default Auth;