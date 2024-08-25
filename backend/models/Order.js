const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_number: Number,
    total_price_set: {
        shop_money: {
            amount: Number,
            currency_code: String
        }
    },
    created_at: Date,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

module.exports = mongoose.model('Order', orderSchema);
