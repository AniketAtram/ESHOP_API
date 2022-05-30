const {
    OK,
    NOT_FOUND,
    BAD_REQUEST
} = require('./../utils/statusCodes');
const Products = require('./../model/productsModel');

exports.checkID = async (req, res, next) => {
    let id = req.params.id;
    // console.log(id);
    console.log(id);
    try {
        data = await Products.findById(req.params.id);
    } catch (error) {
        return res.status(NOT_FOUND).send(
            "Invalid product ID"
        );
    }
    next();
}


exports.getAllProducts = async (req, res) => {
    try {
        let products = await Products.find();
        res.status(OK).json({
            status: "OK",
            results: products.length,
            products: products
        });
    } catch (error) {
        res.status(NOT_FOUND).json({
            message: error.message
        });
    }
}

exports.findProductById = async (req, res) => {
    data = await Products.findById(req.params.id);
    if (!data) {
        res.status(NOT_FOUND).send("No data found!");
    } else {
        res.status(OK).json({
            product: data
        });
    }
}

exports.addProduct = async (req, res) => {
    try {
        let newProduct = await Products.create(req.body);
        res.status(OK).json({
            message: "Data inserted successfully"
        });
    } catch (error) {
        res.status(BAD_REQUEST).send(
            error.message.split(",")
        );
    }
}

exports.getProductCategories = async (req, res) => {
    const categories = await Products.find();
    console.log("hello from pro cat");
}

exports.updateProduct = async (req, res) => {
    let id = req.params.id;
    let updatedProduct = await Products.findByIdAndUpdate(id, req.body, {
        new: true
    })
    res.status(OK).json({
        status: "OK",
        message: "Data updated successfully",
        product: updatedProduct
    })
}

exports.removeProduct = async (req, res) => {
    let id = req.params.id;
    await Products.findByIdAndDelete(id, req.body);
    res.status(OK).json({
        status: "OK",
        message: "Data deleted successfully",
    });
}