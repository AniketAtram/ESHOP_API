const {
    OK,
    NOT_FOUND
} = require('./../utils/statusCodes');
const User = require('./../model/userModel');
// GET ALL USERS IN THE DATABASE
exports.getUser = async (req, res) => {
    try {
        let allUser = await User.find();
        res.status(OK).json({
            status: "Success!",
            results: allUser.length,
            data: {
                users: allUser
            }
        });
    } catch (err) {
        res.status(NOT_FOUND).json({
            message: err
        });
    }
};

// ADD USER IN THE DATABASE
exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(OK).json({
            status: "Success!",
            message: "Data inserted successfully!"
        });
    } catch (err) {
        // let error = err.message.split(" ")[0];
        // console.log(error);
        res.status(NOT_FOUND).json({
            message: err.message
        });
    }
};