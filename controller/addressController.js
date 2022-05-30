const {
    OK,
    NOT_FOUND
} = require('./../utils/statusCodes');
const Address = require('./../model/addressModel');
const middleware = require('./../middleware/customMiddlewares');
// GET all addresses stored in the database
exports.getAllAddress = async (req, res) => {
    try {
        let address = await Address.find();
        res.status(OK).json({
            status: "OK",
            results: address.length,
            data: address
        });
    } catch (error) {
        res.status(OK).json({
            message: error
        });
    }
}

exports.saveAddress = async (req, res) => {
    try {
        let newAddress = await Address.create(req.body);
        res.status(OK).json({
            message: "Data inserted successfully",
            data: newAddress
        });
    } catch (error) {
        res.status(NOT_FOUND).json({
            message: error.message
        });
    }
}