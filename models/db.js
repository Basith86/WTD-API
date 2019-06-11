const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err) {
        console.log("successful");
    }
    else
    {console.log("unsuccesful");}
});

require('./user.model')