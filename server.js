const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path: './config/config.env'
});

const DB = process.env.DATABASE_LOCAL
const PORT = process.env.PORT;

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() => console.log('Database connected successfully!')).catch(err => {
    console.error(err.message)
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server has started and is listening on port: ${PORT}`);
});