"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendLoginResponse = (res, data) => {
    const responseData = {
        success: data.success,
        statusCode: data.statusCode,
        message: data.message || null,
        role: data.role || null || undefined,
        token: data.token || null || undefined
    };
    res.status(data.statusCode).json(responseData);
};
exports.default = sendLoginResponse;
