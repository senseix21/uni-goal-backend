import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StudentStatusService } from "./studentStatus.service";

const create = catchAsync(async (req, res) => {
    const { userId, ...data } = req.body
    const result = await StudentStatusService.create(data, userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudentStatus Profile created successfully",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {

    const result = await StudentStatusService.getSingle(req.params.id)

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

const assignCounselorToStudent = catchAsync(async (req, res) => {

    const result = await StudentStatusService.updateSingle(req.body, req.params.id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "assignCounselorToStudent Profile updated successfully",
        data: result
    })
});

export const StudentStatusController = {
    create,
    getSingle,
    updateSingle,
    deleteSingle,
    assignCounselorToStudent
}