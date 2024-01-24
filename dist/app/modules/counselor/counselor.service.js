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
exports.CounselorService = void 0;
const prisma_1 = require("../../../shared/prisma");
const create = (payload, loggedInUserId, providedUserId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user has already added Counselor
    const userId = providedUserId || loggedInUserId;
    const existing = yield prisma_1.prisma.counselor.findFirst({
        where: {
            userId,
        },
    });
    if (existing) {
        throw new Error("Counselor Information already exists for the user");
    }
    // If the Counselor is not already in the user Profile, add it
    const result = yield prisma_1.prisma.counselor.create({
        data: Object.assign(Object.assign({}, payload), { userId })
    });
    return result;
});
const getSingle = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.counselor.findFirst({
        where: {
            userId
        },
        include: {
            user: true
        }
    });
    return result;
});
const updateSingle = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.counselor.update({
        where: {
            id: id
        },
        data: data
    });
    return result;
});
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.counselor.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.CounselorService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
};
