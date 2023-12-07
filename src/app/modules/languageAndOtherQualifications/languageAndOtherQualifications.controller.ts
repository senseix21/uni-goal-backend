import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LanguageAndOtherQualificationsService } from "./languageAndOtherQualifications.service";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await LanguageAndOtherQualificationsService.create(req.body, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Language And Other Qualifications Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await LanguageAndOtherQualificationsService.getSingle(userId, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Language And Other Qualifications Profile retrieved successfully",
        data: result
    })
});



const updateSingle = catchAsync(async (req, res) => {

    const result = await LanguageAndOtherQualificationsService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Language And Other Qualifications Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await LanguageAndOtherQualificationsService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Language And Other Qualifications Profile deleted successfully",
        data: result
    })
});

export const LanguageAndOtherQualificationsController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}