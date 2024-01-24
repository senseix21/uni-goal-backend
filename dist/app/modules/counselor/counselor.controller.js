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
exports.CounselorController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const jwthelpers_1 = require("../../../helpers/jwthelpers");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const counselor_service_1 = require("./counselor.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.headers.authorization;
    const decodedToken = jwthelpers_1.jwtHelpers.verifyToken(accessToken, config_1.default.jwt.secret);
    const userId = decodedToken.userId;
    // Check if the request contains a user ID in the body
    const providedUserId = req.body.userId;
    // If the user is an admin and a user ID is not provided in the body, generate one
    const result = yield counselor_service_1.CounselorService.create(req.body, userId, providedUserId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Counselor Profile retrieved successfully",
        data: result
    });
}));
const getSingle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.headers.authorization;
    const decodedToken = jwthelpers_1.jwtHelpers.verifyToken(accessToken, config_1.default.jwt.secret);
    const userId = decodedToken.userId;
    const result = yield counselor_service_1.CounselorService.getSingle(userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Counselor Profile retrieved successfully",
        data: result
    });
}));
const updateSingle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield counselor_service_1.CounselorService.updateSingle(req.body, req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Counselor Profile updated successfully",
        data: result
    });
}));
const deleteSingle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield counselor_service_1.CounselorService.deleteSingle(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Counselor Profile deleted successfully",
        data: result
    });
}));
exports.CounselorController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
};
