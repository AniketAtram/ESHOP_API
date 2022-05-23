const express = require('express');
const userRouter = express.Router();
const userController = require('./../controller/userController');
userRouter
    .route('/')
    .get(userController.getUser)
userRouter
    .route('/add')
    .post(userController.addUser)

module.exports = userRouter;