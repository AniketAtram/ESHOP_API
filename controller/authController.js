const {
    OK,
    NOT_FOUND
} = require('./../utils/statusCodes');
exports.authUser = async (req, res) => {
    try {
        res.status(OK).json({
            status: "SUCCESS",
            message: "Helllo from the AUTH API !"
        });
    } catch (error) {
        res.status(NOT_FOUND).json({
            status: "ERROR",
            message: error.message
        });
    }
}