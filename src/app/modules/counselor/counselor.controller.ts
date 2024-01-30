import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CounselorService } from "./counselor.service";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    let userId = decodedToken.userId;

    userId = userId || req.params.id;

    // If the user is an admin and a user ID is not provided in the body, generate one
    const result = await CounselorService.create(req.body, userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Counselor Profile retrieved successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await CounselorService.getSingle(userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Counselor Profile retrieved successfully",
        data: result
    })
});

const updateSingle = catchAsync(async (req, res) => {

    const result = await CounselorService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Counselor Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await CounselorService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Counselor Profile deleted successfully",
        data: result
    })
});

export const CounselorController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}