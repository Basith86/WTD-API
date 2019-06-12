const express = require('express');
const router = express.Router();

const ctrlUSer = require('../controllers/user.controller');
const ctrlMarket = require('../controllers/marketing.controller');



router.post('/register', ctrlUSer.register);
router.post('/marketing', ctrlMarket.marketing);

router.get('/get', ctrlUSer.retriew)

router.put('/testing/:id', function(req, res){
        var name = req.body.name    
    res.send({
        type: name
    })
})

module.exports = router;