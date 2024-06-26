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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./libs/env");
const prisma_1 = require("./libs/prisma");
const app = (0, express_1.default)();
app.get('/', (_, response) => {
    response.status(200).json({ message: 'Welcome to vercel-express-ts' });
});
app.get('/ping', (_, response) => {
    response.status(200).json({ message: 'pong!' });
});
app.get('/users', (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    response.status(200).json({ users });
}));
app.listen(env_1.PORT, () => console.log('Server running at PORT: ', env_1.PORT));
