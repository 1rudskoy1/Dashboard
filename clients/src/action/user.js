import axios from 'axios'
import { API_URL } from '../config.js';

export const auth = async (email, password) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/auth`, {
            email,
            password
        });
        alert(response.data.message);
    }catch(e){
        alert("e.response.data.message");
    }
}

export const registration = async (email, password, name) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/registration`,{
            email, password, name
        });
        
        alert(response.data.message);
    } catch(e){
        alert("Что-то пошло не так")
    }
}