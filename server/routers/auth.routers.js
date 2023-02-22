const Router = require('express');
const router = new Router(); 
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const config = require('config');

router.post('/auth', async (req, res) => {
    try {
        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if(!candidate){
           res.json({message: 'Такого пользователя не существует'}); 
        }

        res.json({message: 'email'});
    } catch(e){

    }
})

router.post('/registration', async (req, res) => {
    try {
        const {email, password, name} = req.body;
        const candidate = await User.findOne({email});
        if(candidate){
            res.json({message: 'Такой пользователь уже существует'}); 
         }
         const hashPassword = await bcrypt.hash(password, 12);
         const user = new User({email, password: hashPassword, name: name});
            await user.save();

        res.json({message: "Регистрация прошла успешно"})
    } catch(e){

    }
})

module.exports = router;