const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: Number
    },
    message: {
        type: String
    }
});

mongoose.model('contact', contactSchema);