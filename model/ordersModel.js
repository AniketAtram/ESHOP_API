const mongoose = require('mongoose');
const ordersSchema = mongoose.Schema({
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: [true, 'cannot be empty']
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: [true, 'cannot be empty']
    },
    quantity: {
        type: Number,
        required: [true, 'cannot be empty']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});
const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;