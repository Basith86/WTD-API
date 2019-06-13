const express = require('express');
const router = express.Router();

const ctrlUSer = require('../controllers/user.controller');
const ctrlMarket = require('../controllers/marketing.controller');
const ctrlOrder = require('../controllers/order.controller');


router.post('/register', ctrlUSer.register);
router.post('/marketing', ctrlMarket.marketing);
router.post('/order', ctrlOrder.order);

router.get('/get', ctrlUSer.retriew)

router.put('/testing/:id', function(req, res){
        var name = req.body.name    
    res.send({
        type: name
    })
})

module.exports = router;