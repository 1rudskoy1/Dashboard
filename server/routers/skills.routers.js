const Router = require('express');
const router = new Router(); 

router.get('/all', async (req, res) => {
    try {
        res.json({message: "dsflajk"})
    } catch(e){

    }
})

module.exports = router;