const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    type: {
        normalWater: {
            type: String
        },
        roWater: {
            type: String
        },
        droWater: {
            type: String
        },
        troWater: {
            type: String
        }
    },
    address:{
        street :{
            type: String
        },
        city : {
            type: String
        },
        state: {
            type: String
        },
        zip : {
            type: String
        },
        country: {
            type: String
        }
    },
    payment: {
        type: String
    },
    email: {
        type: String
    }
});

mongoose.model('order',orderSchema);