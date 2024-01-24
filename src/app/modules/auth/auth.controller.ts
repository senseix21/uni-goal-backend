import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendLoginResponse from "../../../shared/sendLoginResponse";
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

const login = catchAsync(async (req, res) => {
    const { ...loginData } = req.body;
    const result = await Authservice.login(loginData);
    const { token, role } = result;


    res.cookie("refreshToken", token);

    sendLoginResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        role: role,
        token: token


    },
    );
})
export const AuthController = {
    signUp,
    login
}
