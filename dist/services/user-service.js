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
exports.UserService = void 0;
const libs_1 = require("../libs");
class UserService {
    static findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.user.findFirst({ where: { id } });
        });
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.user.findUnique({ where: { email } });
        });
    }
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.user.create({ data });
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.user.update({ where: { id }, data });
        });
    }
}
exports.UserService = UserService;
