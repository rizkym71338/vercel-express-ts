"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./libs/env");
const app = (0, express_1.default)();
app.get('/', (_, response) => {
    response.status(200).send('Welcome to vercel-express-ts!');
});
app.listen(env_1.PORT, () => console.log('Server running at PORT: ', env_1.PORT));
