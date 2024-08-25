const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    created_at: Date,
    default_address: {
        city: String,
        country: String,
        zip: String
    }
});

module.exports = mongoose.model('Customer', customerSchema);
