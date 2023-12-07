import { Response } from 'express';

type IApiReponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string | null;
    meta?: {
        page: number;
        size: number;
        total: number;
    };
    data?: T | null;
    token?: string
};


const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
    const responseData: IApiReponse<T> = {
        success: data.success,
        statusCode: data.statusCode,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
        token: data.token || null || undefined
    };

    res.status(data.statusCode).json(responseData);
};



export default sendResponse;
