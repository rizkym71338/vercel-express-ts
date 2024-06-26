"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const services_1 = require("../services");
const response_1 = require("../libs/response");
class UserController {
    static findMany(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield services_1.UserService.findMany();
                return new response_1.SuccessResponse({ response, data: users, message: 'OK' });
            }
            catch (error) {
                return new response_1.ErrorResponse({ response, message: error.message });
            }
        });
    }
    static findById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const user = yield services_1.UserService.findById(id);
                if (!user)
                    return new response_1.NotFoundResponse({ response, message: 'User not found' });
                return new response_1.SuccessResponse({ response, data: user, message: 'OK' });
            }
            catch (error) {
                return new response_1.ErrorResponse({ response, message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
