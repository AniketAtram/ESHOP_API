const fs = require('fs');
const {
    MongoClient
} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({
    path: './../config/config.env'
});

// LOCAL DATABSE URI
const uri = process.env.URI;

// MONGODB CLIENT
const client = new MongoClient(uri);

// PATH TO THE JOSON FILES
const ADDR_PATH = './../data/addresses.json'
const ORDER_PATH = './../data/orders.json'
const PRODUCT_PATH = './../data/products.json'
const USER_PATH = './../data/users.json'
const ENC = 'utf-8'

// READ THE DATA TO BE INSERTED INTO THE DATABASE
const userData = JSON.parse(fs.readFileSync(USER_PATH, ENC));
const addressData = JSON.parse(fs.readFileSync(ADDR_PATH, ENC));
const orderData = JSON.parse(fs.readFileSync(ORDER_PATH, ENC));
const productData = JSON.parse(fs.readFileSync(PRODUCT_PATH, ENC));



// INSERT DATA INTO THE DATABASE
const inserData = async () => {
    try {
        await client.connect();
        const database = client.db("insertDB");
        // const users = database.collection("users");
        // const products = database.collection("products");
        // const orders = database.collection("orders");
        const addresses = database.collection("addresses");

        // this option prevents additional documents from being inserted if one fails
        const options = {
            ordered: true
        };

        // await users.insertMany(userData, options);
        // await products.insertMany(productData, options);
        // await orders.insertMany(orderData, options);
        await addresses.insertMany(addressData, options);
        console.log("Documents inserted successfully!");

    } catch (error) {
        console.error(error.message);
    }
}

if (process.argv[2] === '--init-database') {
    console.log("Initializong the Database.....");
    inserData();
}