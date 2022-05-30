// ref : https://stackoverflow.com/questions/55813623/using-express-validator-to-check-if-input-is-a-username-or-email
// https://joi.dev/api/?v=17.6.0
const JOI = require('joi');
// MIDDLEWARE FOR CHECKING IF USER ENTERED EMAIL CORRECTLY OR NOT
exports.checkEmail = async (req, res, next) => {
    console.log('Hello from user middleware🙋‍♂️');
    const schema = JOI.object({
        email: JOI.string().regex(/^(([a-zA-Z0-9 _ - .]{1,255})+)@(([a-zA-Z0-9]{1,255})+).([a-z]{2,6})$/)
            .required().email()
    });
    try {
        const value = await schema.validateAsync({
            email: req.body.email
        });
        console.log(value);
    } catch (err) {
        return res.status(401).json({
            message: "Invalid email-id format!"
        });
    }
    next();
}

// MIDDLEWARE TO CHECK IF THE EMAIL OR PASSWORD IS EMPTY
exports.checkLoginCredentials = async (req, res, next) => {
    console.log('Hello from Auth Middleware 🙋‍♂️');
    const schema = JOI.object({
        email: JOI.string().required().email(),
        password: JOI.string().required()
    });
    try {
        const value = await schema.validateAsync({
            email: req.body.email,
            password: req.body.password
        });
        console.log(value);
    } catch (err) {
        return res.status(401).json({
            message: "Username or Password cannot be empty!"
        });
    }
    next();
}

// MIDDLEWARE TO VALIDAT PRODUCT
exports.checkProductsInput = (req, res, next) => {
    console.log("Hello from address middleware 🙋‍♂️");
    next();
}