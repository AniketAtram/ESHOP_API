const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));



const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const addressRouter = require('./routes/addressRoute');
const productsRouter = require('./routes/productsRoute');
// app.post('/user', userController.getUser);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/address', addressRouter);
app.use('/products', productsRouter);


module.exports = app;