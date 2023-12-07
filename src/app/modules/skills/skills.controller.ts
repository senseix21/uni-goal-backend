import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SkillsService } from "./skills.service";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await SkillsService.create(req.body, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Skills Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await SkillsService.getSingle(userId, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Skills Profile retrieved successfully",
        data: result
    })
});



const updateSingle = catchAsync(async (req, res) => {

    const result = await SkillsService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Skills Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await SkillsService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Skills Profile deleted successfully",
        data: result
    })
});

export const SkillsController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}