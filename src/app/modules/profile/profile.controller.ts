// profile.controller.js

import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProfileService } from "./profile.service";



const getAll = catchAsync(async (req, res) => {
    const result = await ProfileService.getAll()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student Profiles retrieved successfully",
        data: result
    })
});


const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await ProfileService.getSingle(req.params.id, userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Profile retrieved successfully",
        data: result
    })
});


const getAllCounselor = catchAsync(async (req, res) => {
    const result = await ProfileService.getAllCounselor()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Counselor Profiles retrieved successfully",
        data: result
    })
});

export const ProfileController = {
    getSingle,
    getAll,
    getAllCounselor
}
