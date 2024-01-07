import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { EducationHistoryService } from "./educationHistory.service";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;

    const result = await EducationHistoryService.create(req.body, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "EducationHistory Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await EducationHistoryService.getSingle(userId, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "EducationHistory Profile retrieved successfully",
        data: result
    })
});


const getAll = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;

    const result = await EducationHistoryService.getAll(userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "EducationHistory Profiles retrieved successfully",
        data: result
    })
});

const updateSingle = catchAsync(async (req, res) => {

    const result = await EducationHistoryService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "EducationHistory Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await EducationHistoryService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "EducationHistory Profile deleted successfully",
        data: result
    })
});

export const EducationHistoryController = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}