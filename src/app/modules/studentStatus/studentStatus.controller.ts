import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StudentStatusService } from "./studentStatus.service";

const create = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await StudentStatusService.create(req.body, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudentStatus Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const result = await StudentStatusService.getSingle(userId, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudentStatus Profile retrieved successfully",
        data: result
    })
});



const updateSingle = catchAsync(async (req, res) => {

    const result = await StudentStatusService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudentStatus Profile updated successfully",
        data: result
    })
});

const deleteSingle = catchAsync(async (req, res) => {

    const result = await StudentStatusService.deleteSingle(req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudentStatus Profile deleted successfully",
        data: result
    })
});

export const StudentStatusController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}