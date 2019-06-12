const mongoose = require('mongoose');

const Marketing = mongoose.model('marketing');

module.exports.marketing = (req, res, next) => {
    console.log("inside marketing func");

    var marketing = new Marketing();

    marketing.name = req.body.name;
    // marketing.fathersName = req.body.fathersName;
    marketing.number = req.body.number;
    marketing.address = req.body.address;
    marketing.email = req.body.email;
    marketing.organisation = req.body.organisation;
    marketing.gst = req.body.gst;
    marketing.fathersName = req.body.fathersName;
    marketing.deposit = req.body.deposit;
    marketing.save((err,doc) => {
        if(!err){
            res.send(doc)
        }
    })
}