"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_route_1 = require("./user-route");
const routes = (app) => {
    app.get('/', (_, response) => {
        return response.status(200).json({ message: 'Welcome to vercel-express-ts' });
    });
    app.use('/users', user_route_1.userRoute);
};
exports.routes = routes;
