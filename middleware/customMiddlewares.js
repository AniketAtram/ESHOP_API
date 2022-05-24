// MIDDLEWARE FOR CHECKING IF USER IS ALREADY REGISTERED
exports.checkUser = async (req, res, next) => {
    console.log('Hello from user middleware🙋‍♂️');

    next();
}