const Router = require('express');
const router = new Router(); 
const User = require('../models/User.js');

router.get('/date', async (req, res) => {
    console.log(req.body);
    const {email, password, oldEmail} = req.body;
    const candidate = await User.findOne({oldEmail});
    console.log(candidate._id)
    return res.json({
        user: {
            id: candidate._id,
            email: email,
            password: password,
            skills:[{title:"Twitter", clrBg:"#e2fbd7", clr:"#367CE3", procent: "6%"}, {title:"Facebook", clrBg:"#ffe5d3", clr:"#ff3a29", procent: "37%"}, {title:"Instagram", clrBg:"#dddafe", clr:"#443af2", procent: "46%"}, {title:"Behance", clrBg:"#ccf8fe", clr:"#02a0fc", procent: "67%"}]
        }
    })
});

module.exports = router;