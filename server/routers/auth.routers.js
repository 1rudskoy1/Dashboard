const Router = require('express');
const router = new Router(); 
const config = require('config');

router.get('/auth', async (req, res) => {
    try {
        res.json({message: "dsflajk"})
    } catch(e){

    }
})

module.exports = router;