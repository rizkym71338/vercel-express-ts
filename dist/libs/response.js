"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedResponse = exports.ErrorResponse = exports.BadRequestResponse = exports.NotFoundResponse = exports.SuccessResponse = void 0;
const env_1 = require("./env");
class SuccessResponse {
    constructor({ response, data, message }) {
        response.status(200).json({ message, data });
    }
}
exports.SuccessResponse = SuccessResponse;
class NotFoundResponse {
    constructor({ response, message }) {
        response.status(404).json({ message });
    }
}
exports.NotFoundResponse = NotFoundResponse;
class BadRequestResponse {
    constructor({ response, message }) {
        response.status(400).json({ message });
    }
}
exports.BadRequestResponse = BadRequestResponse;
class ErrorResponse {
    constructor({ response, message }) {
        response.status(500).json({ message: env_1.ENV.IS_PRODUCTION ? 'Internal server error' : message });
    }
}
exports.ErrorResponse = ErrorResponse;
class UnauthorizedResponse {
    constructor({ response, message }) {
        response.status(401).json({ message });
    }
}
exports.UnauthorizedResponse = UnauthorizedResponse;
