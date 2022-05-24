const mongoose = require('mongoose');
const ordersSchema = mongoose.Schema({
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});
const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;