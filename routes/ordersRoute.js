const express = require('express');
const ordersRouter = express.Router();
ordersRouter
    .route('/')
    .get()
    .post()
module.exports = ordersRouter;