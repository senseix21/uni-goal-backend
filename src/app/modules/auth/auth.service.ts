import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import { passCompare } from "../../../helpers/passCompare";
import { prisma } from "../../../shared/prisma";
import { ILoginResponse, ILoginUser, IUser } from "./auth.interface";


const signUp = async (payload: IUser) => {
    const result = await prisma.user.create({ data: payload })
    return result;
}

const login = async (payload: ILoginUser): Promise<ILoginResponse> => {
    const { email, password } = payload;

    const isUserExist = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
    }

    if (
        isUserExist.password &&
        !(await passCompare(password, isUserExist.password))
    ) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
    }

    //create acess and refresh token 
    const { id: userId, role: role, } = isUserExist
    const token = jwtHelpers.createToken(
        { userId, role },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
    )

    return {
        token,
    }
}
export const Authservice = {
    signUp,
    login

}