"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get('/', controllers_1.UserController.findMany);
exports.userRoute.get('/:id', controllers_1.UserController.findById);
