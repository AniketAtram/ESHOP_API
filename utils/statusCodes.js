const status = require('http-status-codes');
// HTTP STATUS CODE 200
const OK = status.StatusCodes.OK;
// HTTP STATUS CODE 404
const NOT_FOUND = status.StatusCodes.NOT_FOUND;
// HTTP STATUS CODE 400
const BAD_REQUEST = status.StatusCodes.BAD_REQUEST;
// HTTP STATUS CODE 401
const UNAUTHORIZED = status.StatusCodes.UNAUTHORIZED;
// HTTP STATUS CODE 403
const FORBIDDEN = status.StatusCodes.FORBIDDEN;

module.exports = {
    OK,
    NOT_FOUND,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN
}