const mongoose = require('mongoose');

var marketingSchema = new mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    organisation: {
        type: String
    },
    gst: {
        type: String
    },
    deposit: {
        type: String
    }
});

mongoose.model('marketing', marketingSchema);