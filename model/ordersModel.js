const mongoose = require('mongoose');
const ordersSchema = mongoose.Schema({
    amount: {},
    order_date: {},
    product_id: {},
    shipping_address_id: {},
});
const Orders = mongoose.model('Orders', productsSchema);
module.exports = Orders;