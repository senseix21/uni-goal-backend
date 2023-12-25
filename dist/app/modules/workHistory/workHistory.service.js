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
exports.WorkHistoryService = void 0;
const prisma_1 = require("../../../shared/prisma");
const create = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.workHistory.create({
        data: Object.assign(Object.assign({}, payload), { userId })
    });
    return result;
});
const getSingle = (userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.workHistory.findFirst({
        where: {
            userId,
            id
        },
        include: {
            user: true
        }
    });
    return result;
});
const getAll = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.workHistory.findMany({
        where: {
            userId
        },
    });
    return result;
});
const updateSingle = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.workHistory.update({
        where: {
            id: id
        },
        data: data
    });
    return result;
});
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.workHistory.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.WorkHistoryService = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
};
