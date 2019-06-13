const mongoose = require('mongoose');

const Order = mongoose.model('order');

module.exports.order = (req,res,err) => {

    var order = new Order();

    order.type = req.body.type;
    order.address = req.body.address;
    order.payment = req.body.payment;
    order.save((err,doc) => {
        if(!err){
            res.send(doc);
        }
    })
}