import { prisma } from "../../../shared/prisma";
import { IUser } from "./auth.interface";


const signUp = async (payload: IUser) => {
    const result = await prisma.user.create({ data: payload })
    return result;
}

export const Authservice = {
    signUp,

}