import { Counselor } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { ICounselor } from "./counselor.interface";

const create = async (payload: ICounselor, loggedInUserId: string, providedUserId?: string): Promise<Counselor> => {

    // Check if the user has already added Counselor
    const userId = providedUserId || loggedInUserId;

    const existing = await prisma.counselor.findFirst({
        where: {
            userId,
        },
    });

    if (existing) {
        throw new Error("Counselor Information already exists for the user");
    }

    // If the Counselor is not already in the user Profile, add it
    const result = await prisma.counselor.create({
        data: {
            ...payload,
            userId
        }
    });

    return result;
}

const getSingle = async (userId: string): Promise<Counselor | null> => {
    const result = await prisma.counselor.findFirst({
        where: {
            userId
        },
        include: {
            user: true
        }
    })

    return result;
}

const updateSingle = async (data: Partial<ICounselor>, id: string): Promise<Counselor> => {
    const result = await prisma.counselor.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<Counselor | null> => {
    const result = await prisma.counselor.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const CounselorService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}