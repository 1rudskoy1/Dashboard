const Router = require('express');
const router = new Router(); 

const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const config = require('config');
const authMiddleware = require('../middleware/auth.middleware.js');
const userController = require('../controllers/user-controller.js');
router.post('/auth', userController.auth)

router.get('/authoriz', authMiddleware,
async(req, res) => {

    try{
        const user = await User.findOne({_id: req.user.id});
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "3h"});
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                password: user.password,
                skills:[{title:"Twitter", clrBg:"#e2fbd7", clr:"#367CE3", procent: "6%"}, {title:"Facebook", clrBg:"#ffe5d3", clr:"#ff3a29", procent: "37%"}, {title:"Instagram", clrBg:"#dddafe", clr:"#443af2", procent: "46%"}, {title:"Behance", clrBg:"#ccf8fe", clr:"#02a0fc", procent: "67%"}]
            }
        })
    }catch(e){
        console.log(e);
        res.send({message: "Server error"});
    }
});

router.post('/registration', userController.registration)

module.exports = router;