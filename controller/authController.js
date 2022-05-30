const {
    OK,
    NOT_FOUND
} = require('./../utils/statusCodes');
const User = require('./../model/userModel');
exports.authUser = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) {
        res.status(NOT_FOUND).json({
            message: "User not found. Invalid credentials!"
        });
    } else {
        res.status(OK).json({
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            isAuthenticated: true
        });
    }
}