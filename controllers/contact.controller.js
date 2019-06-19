const mongoose = require('mongoose');

const Contact = mongoose.model('contact');

module.exports.contact = (req,res,next) => {
    var contact = new Contact();

    contact.name = req.body.name;
    contact.number = req.body.number;
    contact.email = req.body.email;
    contact.message = req.body.message;
    contact.save( (err,doc) => {
        if(!err){
            res.send(doc);
        } else {
            res.send([{"error" : "86"}]);
        }
    })
}