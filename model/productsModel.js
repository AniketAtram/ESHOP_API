const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    availableItems: {},
    category: {},
    created: {},
    description: {},
    image_url: {},
    manufacturer: {},
    name: {},
    price: {},
    updated: {}
});
const Products = mongoose.model('Products', productsSchema);
module.exports = Products;