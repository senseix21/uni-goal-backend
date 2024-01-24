// profile.controller.js

import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProfileService } from "./profile.service";

const getSingle = catchAsync(async (req, res) => {
    const userId = req.params.id;
    const result = await ProfileService.getSingle(userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Profile retrieved successfully",
        data: result
    })
});

const getAll = catchAsync(async (req, res) => {
    const result = await ProfileService.getAll()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student Profiles retrieved successfully",
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
