import { userRole } from "../../../enums/user";

export type IUser = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    role: userRole;
    survey: string[];
}


export type ILoginUser = {
    email: string;
    password: string;
}

export type ILoginResponse = {
    token: string;
}

export type IRefreshTokenResponse = {
    accessToken: string;
}