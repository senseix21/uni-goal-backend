import { ProfileInformation } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { IProfileInformation } from "./profileInformation.interface";

const create = async (payload: IProfileInformation, userId: string): Promise<ProfileInformation> => {

    // Check if the user has already added profileInformation
    const existingCartItem = await prisma.profileInformation.findFirst({
        where: {
            userId,
        },
    });

    if (existingCartItem) {
        throw new Error("Profile Information already exist for the user");
    }

    // If the profileInformation is not already in the user Profile, add it
    const result = await prisma.profileInformation.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string): Promise<ProfileInformation | null> => {
    const result = await prisma.profileInformation.findFirst({
        where: {
            userId
        }
    })

    return result;
}

const updateSingle = async (data: Partial<IProfileInformation>, id: string): Promise<ProfileInformation> => {
    const result = await prisma.profileInformation.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<ProfileInformation | null> => {
    const result = await prisma.profileInformation.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const ProfileInformationService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}