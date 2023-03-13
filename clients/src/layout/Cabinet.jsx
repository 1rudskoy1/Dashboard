import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeUserDate } from "../action/user";
import "./main.css"

const Cabinet = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.currentUser);
    const oldEmail = useSelector(state => state.currentUser.email);
    const dispatch = useDispatch();
    useEffect(() => {
        user.password = password;
        user.email = email;
        
    }, [email, password]);
    return(
        <div className='cabinet'>
            <div className='cabinet-info'>
                <label htmlFor="cabinet-info__file" className='cabinet-info__img'></label>
                    <input type="file" id="cabinet-info__file" accept='image/*'/>
                    <input name='email' value={email} type="text" className='cabinet-info__input' placeholder={user.email}  onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input name='password' value={password} type="text" className='cabinet-info__input' placeholder={user.password}  onChange={(e)=> {setPassword(e.target.value)}}/> 
                    <button className='auth-btn cabinet-info__btn' onClick={() => {dispatch(changeUserDate(email, password, oldEmail))}}>Сохранить</button>
            </div>
        </div>
    )
}

export default Cabinet;