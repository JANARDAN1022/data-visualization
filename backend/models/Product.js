const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    vendor: String,
    product_type: String,
    created_at: Date,
    variants: [{
        price: Number,
        inventory_quantity: Number
    }]
});

module.exports = mongoose.model('Product', productSchema);
