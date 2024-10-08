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
exports.ProfileService = void 0;
const prisma_1 = require("../../../shared/prisma");
const getSingle = (paramsId, reqBodyId) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = paramsId || reqBodyId;
    const result = yield prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            ProfileInformation: true,
            Counselor: true,
            LanguageAndOtherQualifications: true,
            EducationHistory: true,
            WorkHistory: true,
            ExtraCurricularActivity: true,
            Skills: true,
            StudentStatus: true,
        },
    });
    return result;
});
const getAllCounselor = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findMany({
        where: {
            role: 'counselor'
        },
        include: {
            ProfileInformation: true,
            Counselor: true,
        },
    });
    return result;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findMany({
        where: {
            role: 'student'
        },
        include: {
            ProfileInformation: true,
            Counselor: true,
            LanguageAndOtherQualifications: true,
            EducationHistory: true,
            WorkHistory: true,
            ExtraCurricularActivity: true,
            Skills: true,
            StudentStatus: true,
        },
    });
    return result;
});
exports.ProfileService = {
    getSingle,
    getAll,
    getAllCounselor
};
