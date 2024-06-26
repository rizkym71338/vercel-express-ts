"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const libs_1 = require("./libs");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
(0, routes_1.routes)(app);
app.listen(libs_1.ENV.PORT, () => console.log(`[${libs_1.ENV.NODE_ENV}] Server running at PORT: ${libs_1.ENV.PORT}`));
