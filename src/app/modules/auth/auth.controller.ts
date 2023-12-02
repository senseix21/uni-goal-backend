import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Authservice } from "./auth.service";


const signUp = catchAsync(async (req, res) => {
    const result = await Authservice.signUp(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User created successfully!",
        data: result
    });
});

export const AuthController = {
    signUp
}
