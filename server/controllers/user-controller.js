const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const uuid = require('uuid');
const tokenModel = require('../models/token.js');
class UserController{
    async registration(req, res, next){
        try {
            console.log(req.body)
            const {email, password, name} = req.body;
            const candidate = await User.findOne({email});
            if(candidate){
                return res.status(400).json({message:"Такой пользователь уже существует"});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({email, password: hashPassword, name: name});
            console.log(user)
            await user.save();
            return res.json({message: "Пользователь добавлен"});
        } catch(e){
            return res.json({message: "Регистрация не прошла успешно"})
        }
    }

    async auth (req, res){
        try {
            const {email, password} = req.body;
            const candidate = await User.findOne({email});
            if(!candidate){
               return res.json({message: 'Такого пользователя не существует'}); 
            }
            const validatePassword = bcrypt.compareSync(password, candidate.password);
            if(!validatePassword){
                return res.json({message: "Пароль неверен"});
            }
            const token = jwt.sign({id: candidate._id}, config.get("secretKey"), {expiresIn: "3h"});
            return res.json({
                token,
                user: {
                    id: candidate.id,
                    email: candidate.email,
                    password: candidate.password,
                    skills:[{title:"Twitter", clrBg:"#e2fbd7", clr:"#367CE3", procent: "6%"}, {title:"Facebook", clrBg:"#ffe5d3", clr:"#ff3a29", procent: "37%"}, {title:"Instagram", clrBg:"#dddafe", clr:"#443af2", procent: "46%"}, {title:"Behance", clrBg:"#ccf8fe", clr:"#02a0fc", procent: "67%"}]
                }, message:"Авторизация прошла успешно"
            })
        } catch(e){
    
        }
    }
}

module.exports = new UserController();