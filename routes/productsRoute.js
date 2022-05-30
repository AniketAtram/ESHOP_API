const express = require('express');
const productsRouter = express.Router();
const productController = require('./../controller/productsController');
productsRouter
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct)
productsRouter
    .route('/:id')
    .get(productController.checkID, productController.findProductById)
    .patch(productController.checkID, productController.updateProduct)
    .delete(productController.checkID, productController.removeProduct)
productsRouter
    .route('/categories')
    .get(productController.getProductCategories)
module.exports = productsRouter;