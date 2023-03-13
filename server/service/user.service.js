const User = require('../models/User.js');

class UserService {
    async registration(email, password){
        const candidate = await User.findOne({email});
        if(candidate){
            throw new Error({message: 'Такой пользователь уже существует'}); 
         }
         const user = new User({email, password: hashPassword, name: name, activationLink});
        await user.save();
    }
}