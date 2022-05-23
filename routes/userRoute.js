const express = require('express');
const userRouter = express.Router();
const userController = require('./../controller/userController');
userRouter
    .route('/')
    .post(userController.getUser);

module.exports = userRouter;