import axios from 'axios'
import { SET_USER } from '../redux/store.js';
import { API_URL } from '../config.js';

export const auth = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post(`http://localhost:5000/api/auth/auth`, {
                email,
                password
            });
            dispatch(SET_USER(response.data.user))
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        }catch(e){
            alert(e.response.data.message);
        }
    }
}
export const authoriz = () => {
    return async dispatch => {
        try{
            const response = await axios.get(`http://localhost:5000/api/auth/authoriz`,
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
            );
            dispatch(SET_USER(response.data.user));
            localStorage.setItem('token', response.data.token);
        }catch(e){
            alert(e.response.data.message);
        }
    }
   
}
export const changeUserDate = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/api/change/date');
            console.log(response.data.user);
            dispatch(SET_USER(response.data.user));
            alert("Миссия выполненна");
        }catch(e){
            alert("Что-то пошло не так");
        }
    }
}
export const registration = async (email, password, name) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/registration`,{
            email, password, name
        });
        alert(response.data.message);
        window.location.href = '/api/auth/auth';
    } catch(e){
        alert(e.response.data.message)
    }
}