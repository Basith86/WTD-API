const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
    (res) => {
        console.log("successful");
}
).catch(() => {
    console.log("unsuccessful");
})

require('./user.model');
require('./marketing.model');
require('./order.model');