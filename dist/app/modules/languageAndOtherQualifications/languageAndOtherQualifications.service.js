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
exports.LanguageAndOtherQualificationsService = void 0;
const prisma_1 = require("../../../shared/prisma");
const create = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user has already added LanguageAndOtherQualifications
    const existingItem = yield prisma_1.prisma.languageAndOtherQualifications.findFirst({
        where: {
            userId,
        },
    });
    if (existingItem) {
        throw new Error("Language And Other Qualifications Information already exist for the user");
    }
    // If the LanguageAndOtherQualifications is not already in the user Profile, add it
    const result = yield prisma_1.prisma.languageAndOtherQualifications.create({
        data: Object.assign(Object.assign({}, payload), { userId })
    });
    return result;
});
const getSingle = (userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.languageAndOtherQualifications.findFirst({
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
const updateSingle = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.languageAndOtherQualifications.update({
        where: {
            id: id
        },
        data: data
    });
    return result;
});
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.languageAndOtherQualifications.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.LanguageAndOtherQualificationsService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
};
