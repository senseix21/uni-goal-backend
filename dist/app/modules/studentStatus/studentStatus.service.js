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
exports.StudentStatusService = void 0;
const prisma_1 = require("../../../shared/prisma");
const create = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user has already added StudentStatus
    const existingItem = yield prisma_1.prisma.studentStatus.findFirst({
        where: {
            userId,
        },
    });
    if (existingItem) {
        throw new Error("Student Status  already exist for the user");
    }
    // If the StudentStatus is not already in the user Profile, add it
    const result = yield prisma_1.prisma.studentStatus.create({
        data: Object.assign(Object.assign({}, payload), { userId })
    });
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.studentStatus.findFirst({
        where: {
            id
        },
        include: {
            user: true
        }
    });
    return result;
});
const updateSingle = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.studentStatus.update({
        where: {
            id: id
        },
        data: data
    });
    return result;
});
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.studentStatus.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.StudentStatusService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
};
