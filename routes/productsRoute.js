const express = require('express');
const productsRouter = express.Router();
productsRouter
    .route('/')
    .get()
    .post()
productsRouter
    .route('/:id')
    .get()
    .put()
    .delete()
productsRouter
    .route('/categories')
module.exports = productsRouter;