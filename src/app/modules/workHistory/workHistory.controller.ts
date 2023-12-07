import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { WorkHistoryService } from "./workHistory.route";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await WorkHistoryService.create(req.body, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "WorkHistory Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await WorkHistoryService.getSingle(userId, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "WorkHistory Profile retrieved successfully",
        data: result
    })
});


const getAll = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await WorkHistoryService.getAll(userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "WorkHistory Profiles retrieved successfully",
        data: result
    })
});

const updateSingle = catchAsync(async (req, res) => {

    const result = await WorkHistoryService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "WorkHistory Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await WorkHistoryService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "WorkHistory Profile deleted successfully",
        data: result
    })
});

export const WorkHistoryController = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}