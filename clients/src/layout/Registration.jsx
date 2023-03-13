import React, { useState } from "react";
import { registration } from '../action/user.js';
import "./main.css"

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="auth">
            <div className="auth-form">
            <h2 className="auth-header">Регистрация</h2>
                <input className="auth-form__input" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" name="name"/>
                <input className="auth-form__input" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email"/>
                <input className="auth-form__input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password"/>
                <button className="btn auth-btn" onClick={ () => {registration(email, password, name)}}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Registration;