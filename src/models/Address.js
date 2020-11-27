const { Schema, model, Types } = require('mongoose');

const AddressScheme = new Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = model('Address', AddressScheme);
